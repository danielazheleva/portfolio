import React from "react";
import { navigate } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'


const AboutBody = ({ node, expected }) => {
    return (
        <p className='text-body'>
            {   
                node.frontmatter.title === expected ? <MDXRenderer>{node.body}</MDXRenderer> : null 
            }
        </p>
    );
};

export default AboutBody;