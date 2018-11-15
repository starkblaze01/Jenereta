import React, { Component } from "react";

class HandBook extends Component {
  render() {
    return (
      <div className="container page displayhandbook">
        <div>
          <h2> Register</h2>
          <p>
            The user needs to register by providing Name, Email and Password.
          </p>
        </div>

        <div>
          <h2> Login</h2>
          <p>
            The user needs to provide the registered username and password in
            order to successfully login into the application.
          </p>
        </div>

        <div>
          <h2> Profile</h2>
          <p>
            This link will appear after successfully logging into the
            application and will direct the user to the page where he can view
            and edit his profile. He can also delete his account from the
            application database. Deleting the account will also remove all
            relevant information stored in the database corresponding to that
            account.
          </p>
        </div>

        <div>
          <h3>Add Subjects</h3>
          <p>
            On the left side of the page, which will appear after login, there
            is a navigation pane. Choose ‘Add Subjects’ link to input the data
            related to the subjects. Now on the right side of the page, there
            are two radio buttons. If you want to add theory lectures, e.g
            Physics, then select ‘Add Theory Subject’ radio button and click
            ‘Add’ button. Else if you want to add a lab subject then select ‘Add
            Lab’ radio button, provide the name of the lab appended by the ‘Lab’
            word, e.g: Physics Lab, and also provide the number of such labs,
            e.g. number of physics lab in the school is 2, then click ‘Add’
            button.After submitting the values the input fields will be reset
            and you need to add another subject or lab in the same way.
          </p>
        </div>

        <div>
          <h3>Delete Subjects</h3>
          <p>
            On the Add subject page, you can view the list of subjects added and
            on the right of every subject name, there is a delete button. Click
            on the button and that subject would be deleted.{" "}
          </p>
        </div>

        <div>
          <h3>Add Teachers</h3>
          <p>
            If you want to add the name of teachers, then simply click the ‘Add
            Teachers’ link on the left side navigation pane and then enter the
            name of the teacher and click ‘Add’ button. After that, the input
            field will be reset and continue adding in the same way. If there is
            more than one teacher of the same name, then no need to enter the
            same name again.
          </p>
        </div>

        <div>
          <h3>Delete Teachers</h3>
          <p>
            On the Add Teachers page, you can view the list of teachers added
            and on the right of every teacher name, there is a delete button.
            Click on the button and that teacher name would be deleted.
          </p>
        </div>

        <div>
          <h3>Add ClassSection</h3>
          <p>
            If you want to add class and section then click the ‘ClassSection’
            link on the left side of the navigation pane and then you can fill
            in the necessary values in the input field on the right side.
          </p>
          <p>
            Some conventions are: Suppose the class is 5th and the sections are
            A, B, and C, then fill in the values in the form of class appended
            by section e.g, 5A. Then click the ‘Add’ button. The input field
            will reset and you need to fill in another value in the same way.
          </p>
        </div>

        <div>
          <h3>Delete ClassSection</h3>
          <p>
            On the Add ClassSection page, you can view the list of ClassSection
            added and on the right of every ClassSection name, there is a delete
            button. Click on the button and that value would be deleted.
          </p>
        </div>

        <div>
          <h3>Add Number of Periods</h3>
          <p>
            Add the number of periods each day. After filling in these details
            you can add slots.
          </p>
        </div>

        <div>
          <h3>Add Slots</h3>
          <p>
            After filling in the data separately and adding number of lectures
            each day, you can now make the sets of the teacher, subject,
            classSection and the number of lectures for that particular set. Eg,
            in the classSection 5A teacher XYZ teaches Physics subject and the
            number of lectures per week taken by him is 4, then you need to
            select the name of the teacher, subject name and classSection from
            the dropdown list and input the number of the lectures. After this,
            you need to click ‘Add’ button and the values of the fields will be
            reset. You need to do this for all the sets.
          </p>
        </div>

        <div>
          <h3> Delete Slots</h3>
          <p>
            On the Add Slots page, you can view the slot details added and on
            the right of every slot, there is a delete button. Click on the
            button and that slot would be deleted.
          </p>
        </div>

        <div>
          <h3>Generate TimeTable</h3>
          <p>
            After entering all the relevant slot details, the user can click on
            the Generate TimeTable button present on the bottom right of the add
            slots page.
          </p>
        </div>
      </div>
    );
  }
}

export default HandBook;
