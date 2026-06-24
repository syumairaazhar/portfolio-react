function ContactForm(props) {
    return (
        <section>
            <h2>Update Hero Name</h2>

            <input
                type="text"
                value={props.name}
                onChange={props.handleChange}
            />
        </section>
    );
}

export default ContactForm;