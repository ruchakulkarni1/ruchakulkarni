import "./about.css"
export default function About() {

   return(
    <div>
        <div class="aboutDiv">
            <div class="aboutText">
                <p class="aboutTextP">
                I am a graduate student from Portland State University with a M.S. in Computer Science. 
                I have had the opportunity to gain industry experience in software development where I’ve 
                applied the skills I have learned in my previous degree. 
                I like to code so in my free time, I enjoy solving analytical problems and 
                learn new programming languages.</p>
            </div>
            <div class="aboutImage">
                <img src="./My_Pic1.jpeg" alt="Profile_Pic" class="aboutPic"></img> 
            </div>
        </div>
        <div class="aboutDetails">
            <div class="educationDiv">
                <div class="universities">
                <h1>Education</h1>
                <ul class="uList">
                    <li class="listItem"><h2 class="uniName">Portland State University</h2>
                    <span class="degree">Masters of Science<br/>
                    Computer Science<br/>GPA: 3.86</span></li>
                    <li class="listItem"><h2 class="uniName">University of Pune</h2>
                    <span class="degree">Bachelor of Engineering<br/>
                    Computer Science<br/>GPA: 3.00</span></li>
                </ul>
                </div>
                <div class="technicalSkills">
                    <h1>Technical Skills</h1>
                    <ul class="tsList">
                        <li class="tskill"><h4 class="titleSkills">Programming languages</h4>C, C++, Java</li>
                        <li class="tskill"><h4 class="titleSkills">Scripting languages</h4>Shell, Bash, Python</li>
                        <li class="tskill"><h4 class="titleSkills">CI/CD</h4>Agile, JIRA, Fisheye, Git, Bamboo</li>
                        <li class="tskill"><h4 class="titleSkills">Database</h4>MySql, PSql, MongoDB</li>
                        <li class="tskill"><h4 class="titleSkills">Web Development</h4>HTML, CSS, JavaScript,<br/> NodeJS, ReactJS, Angular, Bootstrap</li>
                        <li class="tskill"><h4 class="titleSkills">Operating Systems</h4>Unix/Linux, Windows, Android</li>
                        <li class="tskill"><h4 class="titleSkills">Networking</h4>Yang, Netconf, Confd</li>
                    </ul>
                </div>
                
            </div>
            <div class="skillsDiv">
            <div class="coursework">
                    <h1>Coursework</h1>
                <ul class="cList">
                    <li class="course">Cloud Data Management</li>
                    <li class="course">Data Science</li>
                    <li class="course">Advanced Java</li>
                    <li class="course">Full-stack web development</li>
                    <li class="course">Data Engineering</li>
                    <li class="course">Operating Systems</li>
                    <li class="course">Parallel Programming</li>
                    <li class="course">Machine Learning</li>
                    <li class="course">Internetworking Protocols</li>
                    <li class="course">Software Engineering</li>
                </ul>
                </div>
                <div class="professionalSkills">
                <h1>Professional Skills</h1>
                    <ul class="psList">
                        <li class="pskill">Strong Communication</li>
                        <li class="pskill">Good Analytical thinking</li>
                        <li class="pskill">Problem Solving</li>
                        <li class="pskill">Multitasking</li>
                        <li class="pskill">Organization</li>
                        <li class="pskill">Prioritization</li>
                        <li class="pskill">Team Leadership and management</li>
                        <li class="pskill">Critical Thinking</li>
                        <li class="pskill">Collaboration</li>
                        <li class="pskill">Time Management</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   )
}