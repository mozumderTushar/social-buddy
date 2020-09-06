import React from 'react';
import Box from '@material-ui/core/Box';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact">
            <img src="https://cdn.pixabay.com/photo/2017/12/02/15/17/contact-us-2993109__340.jpg" alt="" />

            <Box display="flex" justifyContent="center" m={1} p={1}  >
                <Box  >
                    <h3>WE ARE ALWAYS HAPPY TO HELP</h3>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" m={1} p={1}  >
                <Box>
                    <p>GET IN TOUCH WITH US TODAY!!!!</p>
                </Box>
            </Box>
        </div>


    );
};

export default Contact;