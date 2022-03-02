import "./contact.css"

export default function Contact() {

   return(
    <div>
        <div class="contactDiv">
            <div class="contactForm">
            <form>
                <h1 class="formTitle">Contact me</h1>
                <div class="row">
                   <div class="col">
                        <input type="text" class="form-control form-control-lg" placeholder="Your Name" required/>
                    </div>
                    <div class="col">
                        <input type="email" class="form-control form-control-lg" placeholder="Your E-Mail Address" required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <textarea id="contact-textarea" class="form-control form-control-lg" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                </div>
                <div class="row">
                    <button type="submit" class="btn btn-primary btn-lg sendbutton col-6" id="sendbutton">Send</button>
                    <button type="reset" class="btn btn-secondary btn-lg resetbutton col-6" id="resetbutton">Reset</button>
                </div>
            </form>
            </div>
        </div>
        <div class="other">
                <p class="otherTitle">© 2022 Rucha Kulkarni</p>  
                <div class="social">
                <a href="https://www.linkedin.com/in/rucha-kulkarni-0204ab84/"><img src="./linkedin.png" alt="linkedIn link" class="connectImage"></img></a>
                <a href="https://github.com/ruchakulkarni1"><img src="./github.png" alt="github link" class="connectImage"></img></a>
                </div>
             </div>
    </div>
   )
}