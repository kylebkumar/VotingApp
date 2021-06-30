//
//  LogInViewController.swift
//  VotingApp
//
//  Created by Kyle Kumar on 6/27/21.
//

import UIKit

class LogInViewController: UIViewController {

    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
    var email: String = ""
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        print("Log in view controller loaded")
    }

    @IBAction func login(_ sender: Any) {
        let loginManager = FirebaseAuthManager()
        guard let tempEmail = emailTextField.text, let password = passwordTextField.text else { return }
        loginManager.signIn(email: tempEmail, pass: password) {[weak self] (success) in
            guard let `self` = self else { return }
            var message: String = ""
            if (success) {
                message = "User was sucessfully logged in."
                self.email = tempEmail
                self.doSegue()
            } else {
            message = "There was an error."
            let alertController = UIAlertController(title: nil, message: message, preferredStyle: .alert)
            alertController.addAction(UIAlertAction(title: "OK", style: .cancel, handler: nil))
            self.present(alertController, animated: true, completion: nil)
            }
        }
    }
    
    func doSegue() {
        performSegue(withIdentifier: "loginSegue", sender: self)
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "loginSegue"{
            let tabViewVC = segue.destination as! TabViewController
            tabViewVC.email = self.email
        }
    }
}

