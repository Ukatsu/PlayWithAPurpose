import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoggingService } from './logging.service';

// custom user interface
interface User {
  uid: string;
  email: string;
  photoURL: string;
  catchPhrase?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: Observable<User>;

  constructor(private router: Router,
              private angularFireAuth: AngularFireAuth,
              private angularFirestore: AngularFirestore,
              private loggingService: LoggingService) {

    this.user = this.angularFireAuth.authState.pipe(
      switchMap(user => {
          if (user) {
            return this.angularFirestore.doc<User>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        }));
  }

  emailSignUp(email: string, password: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        return this.setUserDoc(user);
      })
      .catch(error => this.handleError(error) );
  }

   private handleError(error) {
    console.error(error);
    this.loggingService.updateMessage(error.message, 'error');
  }

  private setUserDoc(user) {
    const userRef: AngularFirestoreDocument<User> = this.angularFirestore.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email || null,
      photoURL: 'https://goo.gl/Fz9nrQ'
    };

    return userRef.set(data);

  }

  emailLogin(email: string, password: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(error => this.handleError(error) );
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => this.loggingService.updateMessage('Password update email sent', 'info'))
      .catch((error) => this.handleError(error));
  }


  signOut() {
    this.angularFireAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }

}
