import "./work.css"
export default function Work() {

   return(
    <div>
        <div class="workDiv">
            <div class="workText">
                <p class="workTextP">
                    After completing Bachelors degree in engineering with major 
                    Computer Science I worked at Infosys Limited from February 2015
                    to September 2020. I joined as a trainee and left Infosys to 
                    persue Masters at Portland State University. While working at 
                    Infosys I got an opportunity to work on different projects.
                </p>
            </div>
        </div>
        <div class="workDetails">
            <div class="expDiv">
                <div class="company">    
                        <div class="workDesc">
                            <h3 class="workTitle">Simulator</h3>
                            <br/>It was an early adaptor of the data model and intended
                            to mimic the behavior of the actual data model. My responsibility
                            was to design a UI, using confd-cli and Yang, same as daemons UI 
                            on actual data model, and mimic the backend behavior of C code 
                            using bash, shell or python scripts. It was used for testing new 
                            upcoming releases before releasing an actual data model. I got an 
                            opportunity to work in every phase of a software development 
                            process, Requirement gathering, planning, coding, testing and 
                            deployment.
                        </div>
                        <div class="workDesc">
                            <h3 class="workTitle">Network Gateway module</h3>
                            <br/>This project was about implementing Broadband Network Gateway for routers. 
                            My work involved implementing the SSM (Subscriber session management) module 
                            to manage subscribers’ session configurations. Implementation required UI in YANG and backend code in C.
                        </div>
                        <div class="workDesc">
                            <h3 class="workTitle">Automation Scripts</h3>
                            <br/>I developed two automation scripts in Python. First was to load a 
                            specified image (path) on specified device (ip) which will take care of 
                            all instructions and error and issues. And other script was to convert 
                            the configurations of the device from older version to newer version without 
                            manual intervention.
                        </div>
                        <div class="workDesc">
                            <h3 class="workTitle">Software Maintainence</h3>
                            <br/>I worked on change-requests from the client and bugs resolution. This project 
                            was under networking domain and mainly involved LTE and 2G/3G/4G technologies. 
                            Later I was also part of a feature development where I learn about Agile 
                            methodology.
                        </div>
                </div>
            </div>
        </div>
    </div>
   )
}