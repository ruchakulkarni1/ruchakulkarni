import "./project.css"
export default function Project() {

   return(
    <div>
        <div class="projectDiv">
            <div class="psuPost">
                <h1 class="post">Master of Science</h1>
                <h3 class="duration">January 2021 - June 2022</h3>
                <p class="psuText"> I got a great opportunity to study different courses
                at Portland State University. I worked on different and innovative projects
                during my graduate study.</p>
            </div>
            <div class="psuImage">
            <img class="psuPic" src="./psu.jpg" alt="PSU"></img>
            </div>
        </div>
        <div class="projectDetails">
            <div class="proDiv">
                <div class="college">    
                        <div class="projectDesc">
                            <a href="https://github.com/ruchakulkarni1/PortlandStateJavaSummer2021"><h3 class="projectTitle">AppointmentBook Android Application</h3></a>
                            <br/>AppointmentBook Application was designed for users to book an appointment with an "Owner".
                            UI will provide options to 
                            <br/>1. Add an appointment:
                            It will create a new appointment book for owner if not exist, otherwise append new appointment to the book.
                            <br/>2. Search for an appointment based on the owner's name:
                            It will display the sorted list of all the appointments of the owner.
                            <br/>3. Search for all the appointments in-between times:
                            It will dispaly the sorted list of all the appointments starting from the begin time and end time given.
                            <br/>UI also provides "HELP" option to help user getting startes with an application. The Data is persisted for owners.
                        </div>
                        <div class="projectDesc">
                            <a href="https://github.com/sirikoduru24/ProjectUSAJOBS"><h3 class="projectTitle">USA Jobs Dashboard</h3></a>
                            <br/>USA Jobs dashboard will help users to see, compare, search and apply for jobs from one place.
                            Along with checking available jobs state-wise, users can also see city-wise available jobs. 
                            This dashboard also provides different filters, so that user can filter out the jobs he/she is interested in and can apply to the job through the direct link.
                            To compare, which states have many opportunities based on users’ interest, users can refer to statistics data from the dashboard and continue looking for the jobs.
                            Worked on HTML, CSS, JavaScript, reatjs.
                            </div>
                        <div class="projectDesc">
                            <a href="https://github.com/larrisacarvalho/WorldOfSuperheroes"><h3 class="projectTitle">World of Superheroes</h3></a>
                            <br/>World of Superheroes is a full-stack application. User can see different Superhero details.
                            User can also see statistical analysis of all teh superheroes from different publishers like "Marvel", "DC", "Dark Horse", 
                            "NBC Heroes", "Star Wars" and "Star Trek" and can also compare two superheroes based on powerstats.
                            User can play a small quiz for fun which will maintain a score for each quiz.
                            Worked on HTML, CSS, JavaScript, express, reatjs.

                        </div>
                        <div class="projectDesc">
                            <a href="https://github.com/ChristianNoelSchmid/battlecode21-team6"><h3 class="projectTitle">Battlecode 2021</h3></a>
                            <br/>Worked in a team of four on Battlecode 2021, a famous code compition by MIT.
                            Worked in a Agile model with 4 sprints, one sprint as a team manager and team member 
                            for other 3 sprints. Designed robots using Java, planned strategies, 
                            implemented test cases. Worked with important software development concepts 
                            to compete with other teams. At last our team was at second place.
                        </div>
                        <div class="projectDesc">
                            <a href="https://github.com/sirikoduru24/DataScience_SentimentAnalysis"><h3 class="projectTitle">Twitter Sentiment Analysis</h3></a>
                            <br/>Compared the accuracy of three machine learning algorithms: Support 
                            Vector Machine, Multilayer Perceptron, and Random Forest algorithms. Used database
                            from Twitter using tweepy and extracted sentiments from tweets represented as
                            word2Vec.

                        </div>
                        <div class="projectDesc">
                            <h3 class="projectTitle">Credit Card Fraud Detection</h3>
                            <br/>Analyzed the dataset of credit card transactions using 
                            machine learning algorithms like Random Forest and Support Vector Machine. 
                            Compared these two alogorithms based on precision of the output.
                        </div>
                        <div class="projectDesc">
                            <h3 class="projectTitle">Internet Relay Chat</h3>
                            <br/>Implemented a python application in which multiple clients can connect to server.
                            Join or leave different chat-rooms and communicate with other clients through server.
                        </div>
                        <div class="projectDesc">
                            <h3 class="projectTitle">Big Data - Freeway database</h3>
                            <br/>Worked on Google Cloud Platform, MongoDb, clusters and storage buckets, 
                            create and configure different instances, import data in GCP, 
                            design and executed Big queries using Python.
                        </div>
                </div>
            </div>
        </div>
    </div>
   )
}

/**
 * <div>
        <div class="projectDiv">
            <div class="projectText">
                <p class="projectTextP">
                </p>
            </div>
        </div>
        <div class="projectDetails">
            <div class="projectDiv">
                <div class="projects">
                    <h1>Projects</h1>
                    <ul class="">
                        <li class=""></li>
                        <li class=""></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
 */