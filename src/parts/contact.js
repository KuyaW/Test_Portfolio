import Circle from '../asset/circle'

const Contact = () => {
  return (
    <section className="contactme" id="contactMe">
        <Circle myClassName="circle1" />
        <Circle myClassName="circle2" />
        <div className="contentHolder">
                <h1>CONTACT ME</h1>
                <form >
                    <label htmlFor="name">NAME</label>
                    <input type="email" name="" id="name" placeholder="Enter Name" />
                    <label htmlFor="email">EMAIL</label>
                    <input type="email" name="" id="email" placeholder="Enter Email" />
                    <label htmlFor="message">MESSAGE</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Message"></textarea>
                    <input type="submit" value="SUBMIT" />
                </form>
        </div>
    </section>
)
}

export default Contact
