const path = require("path")
const fs = require("fs");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "sridharan.r@mitrahsoft.com",
        pass: "yaoc roqr wcoe hiex",
    },
});



const SendingTheMail = (req, res) => {
    const { fileName } = req.body;
    const filePath = path.join(__dirname,"..", "uploads", fileName);

    console.log(filePath);
    

    if (!fs.existsSync(filePath)) {
        return res.status(404).send("File not found");
    }


    const mailOptions = {
        from: "sridharan.r@mitrahsoft.com",
        to: "sasikumar.r@mitrahsoft.com",
        subject: "Your marrage finished succesfullly",
        text: "Have happy wdding",
        attachments: [
            {
                filename: fileName,
                path: filePath,
            },
        ],
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).send("Error sending email");
        }
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
    });
}

module.exports = { SendingTheMail }