/**
 * Credit: LearnCode Academy Modular JavaScript https://www.youtube.com/watch?v=sWOXYDBbz0g
 * For java example http://java.about.com/od/workingwithobjects/a/constructor.htm
 */
"use strict";

/**
 * Java example
 * 
 public class Person {

  private String firstName;
  private String lastName;
  private String address;
  private String username;

  //The constructor method
  public Person(String firstName, String lastName, String address, String username)
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.username = username;
  }

  // A method to display the state of the object to the screen
  public void displayPersonDetails()
  {
    System.out.println("Name: " + firstName + " " + lastName);
    System.out.println("Address: " + address);
    System.out.println("Username: " + username);
  }
 }
 */

//NOTE javascript variables unlike java so not need to be DECLARED before use
//However this makes their SCOPE GLOBAL be careful!!!
/**
 * This is a constructor 
 */
let Person = function(firstname, lastname, address, username){
  this.firstname = firstname;
  this.lastname = lastname;
  this.address = address;
  this.username = username;
}

Person.prototype.displayPersonDetails = function(){
  console.log('Name = ' + this.firstname + ' ' + this.lastname);
  console.log('Address = ' + this.address);
  console.log('Username = ' + this.username);
}

let d = new Person("Derrick", "Wilson-Duncan", "Easy St", "Wildunderrick");
d.displayPersonDetails();