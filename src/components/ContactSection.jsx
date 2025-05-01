import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitch,
    Twitter,
} from "lucide-react";


export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">
                        {" "}
                        Contact Information
                    </h3>

                    <div className="space-y-6 justify-center">
                        <div className="flex justify-center items-center space-x-4">
                            <div>
                                <div className="flex justify-center gap-2">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                    <h4 className="font-medium"> Email</h4>
                                </div>

                                <a
                                    href="mailto:bhatiagitika0612@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    bhatiagitika0612@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center space-x-4">

                            <div>
                                <div className="flex justify-center gap-2">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                    <h4 className="font-medium"> Phone</h4>
                                </div>
                                <a
                                    href="tel:+919643984498"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    + (91) 9643984498
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center items-center space-x-4">
                            <div>
                                <div className="flex justify-center gap-2">
                                    <Linkedin className="h-6 w-6 text-primary" />
                                    <h4 className="font-medium">LinkedIn</h4>
                                </div>
                                <a
                                    href="https://www.linkedin.com/in/gitika-bhatia-432b10244/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    linkedin.com/in/gitika-bhatia-432b10244
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};