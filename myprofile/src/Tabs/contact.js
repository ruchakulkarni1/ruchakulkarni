import "./contact.css"

export default function Contact() {

   return(
    <div>
        <div class="contactDiv">
            <div class="contactForm">
            <form>
                <h1 class="row formTitle">Contact me</h1>
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
                    <button type="submit" class="btn btn-primary btn-lg sendbutton" id="sendbutton">Send</button>
                    <button type="reset" class="btn btn-secondary btn-lg resetbutton" id="resetbutton">Reset</button>
                </div>
            </form>
            </div>
        </div>
    </div>
   )
}