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
                        <label for="name" class="labelContact">Name*</label>
                        <input type="text" id="name" class="form-control form-control-lg" required/>
                    </div>
                    <div class="col">
                        <label for="email" class="labelContact">Email*</label>
                        <input type="email" id="email" class="form-control form-control-lg" required/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <label for="contact-textarea" class="labelContact">Your message</label>
                        <textarea id="contact-textarea" class="form-control form-control-lg" rows="5" required></textarea>
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