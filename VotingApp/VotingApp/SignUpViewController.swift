//
//  SignUpViewController.swift
//  VotingApp
//
//  Created by Kyle Kumar on 6/27/21.
//

import UIKit

class SignUpViewController: UIViewController {
    
    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
    @IBOutlet weak var confirmPasswordTextField: UITextField!
    var email: String = ""
    var passwordValue = ""
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        print("Sign up view controller loaded")
    }
    
    
    @IBAction func signUp(_ sender: Any) {
        var message: String = ""
        var passwordsDontMatch = false
        let signUpManager = FirebaseAuthManager()
        if (passwordTextField.text != nil &&  nil != confirmPasswordTextField.text){
            if passwordTextField.text != confirmPasswordTextField.text{
                passwordsDontMatch = true
            }
        }
        if (nil != emailTextField.text && nil != passwordTextField.text) {
            email = emailTextField.text!
            let password = passwordTextField.text!
            if passwordsDontMatch{
                email = ""
            }
            signUpManager.createUser(email: email, password: password) {[weak self] (success) in
                guard let `self` = self else { return }
                if (success) {
                    message = "User was sucessfully created."
                } else if (passwordsDontMatch){
                    message = "Passwords do not match."
                }
                else{
                    message = "There was an error."
                }
                let alertController = UIAlertController(title: nil, message: message, preferredStyle: .alert)
                alertController.addAction(UIAlertAction(title: "OK", style: .cancel, handler: nil))
                if message == "User was sucessfully created." {
                    self.doSegue()
                }
                else{
                    self.present(alertController, animated: true, completion: nil)
                }
            }
        }
    }
    
    func doSegue() {
        performSegue(withIdentifier: "signUpSegue", sender: self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if (segue.identifier == "signUpSegue") {
        let tabViewVC = segue.destination as! TabViewController
        tabViewVC.email = self.email
        }
    }
    
    
}

