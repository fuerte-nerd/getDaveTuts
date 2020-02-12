---
featured_image: assets/alex-knight-2EJCSULRwC8-unsplash.jpg
date: 2020-02-12T10:09:44.686Z
title: How to make a blog with NetlifyCMS and Gatsby
intro_text: >-
  NetlifyCMS is an easy (when you know how!) content management system that
  integrates nicely with Gatsby, giving you and your clients great access to
  their site content.
tags:
  - gatsby
  - netlify
  - netlifycms
  - blog
---
You will need the following installed on your development machine...

* **Gatsby**
* **Node.js**
* **Git**

You will also need a free **Netlify** account and a free **GitHub** account.

Some knowledge of React and GraphQL will also be beneficial to you.

Although I will guide you through this process step-by-step, some foundation knowledge of the above will be very helpful for you to understand what is going on.

- - -

Navigate to your project directory and create a new Gatsby project

> NOTE: for this tutorial, we will call our project **myGatsbyBlog**

```shell
gatsby new myGatsbyBlog
```

When installation has completed, navigate into the directory and install the dependencies you will need

```shell
cd myGatsbyBlog

npm i netlify-cms-app gatsby-plugin-netlify-cms gatsby-cli gatsby-transformer-remark
```

Update **myGasbyBlog/gatsby-config.js** to load `gatsby-plugin-netlify-cms` and `gatsby-transformer-remark`

```javascript
// myGatsbyBlog/gatsby-config.js

module.exports = {
  plugins: [
    // after the preinstalled plugins
    `gatsby-plugin-netlify-cms`, 
    `gatsby-transformer-remark`]
};
```

Create a **static** directory with an **admin** subdirectory in the project root

```shell
mkdir static

mkdir static/admin
```

Create a **config.yml** file in the newly-created admin folder

```shell
touch static/admin/config.yml
```

Add the following code to the **config.yml** file

> **IMPORTANT**: Keep the identation of the code as it is shown below 

```yaml
backend:
  name: git-gateway
  branch: master
media_folder: static/assets
public_folder: assets
collections:
  - name: blog
    label: Blog
    folder: blog
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    editor:
      preview: false
    fields:
      - { name: featured_image, label: Image, widget: image }
      - { name: date, label: Date, widget: datetime }
      - { name: title, label: Title }
      - { name: body, label: Body, widget: markdown }
```

> **WHAT IS THIS?** The **config.yml** file tells NetlifyCMS how you want to set up the CMS.  The above configuration is very basic.  You can add more fields and options.  For more information visit <https://www.netlifycms.org/docs/configuration-options/>

Create a GitHub repository

![](assets/shot1.png)

Copy the GitHub **remote add origin** command to the clipboard

Paste the command in the root of your project to add the new origin

```shell
# IMPORTANT: Replace my github user details with yours

git remote add origin https://github.com/fuerte-nerd/my-gatsby-blog.git
```

Commit and push what you have so far to your new GitHub repo

Login to Netlify and click **New site from Git** on the dashboard.

![](assets/shot3.png)

Click on the **GitHub** button

> **NOTE**: If you haven't done so before, you will be asked to allow Netlify to access your GitHub repos.

Locate your GitHub repository and select it

![](assets/shot5.png)

Click the **Deploy site** button

![](assets/shot6.png)

This will begin the process of deploying your site to Netlify from your GitHub repo.  You will be taken to a screen where you can observe the progress.  **Wait until the site has finished deploying before continuing to the next step.**

> **IMPORTANT**: Your project will be assigned a random name by Netlify. In this example it is called **admiring-mayer-2fc417** but yours will be different.

When site is live, navigate to the **Identity** tab in the Netlify project dashboard and click **Enable Identity**

![](assets/shot8.png)

Navigate to your Netlify project settings **Identity > Services** and click **Enable Git Gateway**

![](assets/shot9.png)

Make sure to set registrations to **Invite only**

![](assets/shot11.png)

Go back to the **Identity** tab, click **Invite Users**

![](assets/shot12.png)

- - -

Enter your email address to add yourself as a user and click **Send**

Check your email, you should receive an email with the subject **You've been invited to join your-project-name.netlify.com**.  Open it and click the **Accept the invite** link.

You will be redirected to your new Gatsby site where you will be asked to provide a password.  Create a secure password when prompted and complete the signup.

![](assets/shot15.png)

After completing the signup, you will be redirected to the CMS dashboard.  Click the **New Blog** button.

Now create your first post.  When finished, click the Publish button and then select **Publish now**

Navigate back to Netlify and you will see that the CMS is automatically pushing the post to your GitHub repo and redeploying your site

![](assets/shot18.png)

> **IMPORTANT**: Wait for this deployment to finish before continuing with the frontend hook-up.

**CONGRATULATIONS!**

You have successfully set up your blog and hooked it up to Netlify!  Now it's time to hook it up to the frontend of your Gatsby site.

Have a well-deserved cup of tea and then we can get on with connecting the frontend.

- - -

#### Frontend hook-up

Firstly, we need to pull our GitHub repo, which now contains the blog post we just created, into our local Git repo.

```shell
# ensure you are in your project root directory

git pull origin master
```

We need to let Gatsby know where to find the blog posts so we can reach them via GraphQL from the frontend.  Add the following to the `plugins` in **gatsby-config.js**

```javascript
{
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `blog`,
    path: `${__dirname}/blog`,
  },
},
```

Create the path **src/templates** and add a template file inside it, for example called **blogTemplate.js**.

```shell
mkdir src/templates

touch src/templates/blogTemplate.js
```

Paste the following in the **blogTemplate.js** file (a template to get you started!)

```javascript
import React from "react";
import { graphql } from "gatsby";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
      <div className="blog-post">
      <img src={frontmatter.featured_image} style={{
        display: 'block',
        maxWidth: '50%',
        margin: 'auto'
      }}></img>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "D/M/YYYY HH:mm")
        title
        featured_image
      }
    }
  }
`;
```

Let's take a closer look at how we are getting our data...

```javascript
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "D/M/YYYY HH:mm")
        title
        featured_image
      }
    }
  }
`
```

When each page is generated for the blog, it will be passed data from our **gatbsy-node.js** *(We will add this shortly)*.

It will search all files exposed via `gatsby-transformer-remark` for a slug that is equal to the path we pass into it.  Then, it will retrieve the body of the post via `html` and the rest of the data we need from the frontmatter with some special date formatting.

Paste the following into the **gatsby-node.js** file...

```javascript
const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");

// The slug (the url) is not exposed to GraphQL by default so we need to pass it through manually.

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};

// Here is where we create pages for our blog
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);

  // First, we need to grab all the blogs, sorting them by date
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // If no errors, then we can generate a page for each post, passing in the slug as a path.*
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {} // additional data can be passed via context
    });
  });
};
```

\* *Remember the **$path** variable we accessed via the GraphQL query in the **blogTemplate.js** file?*

Now it's time to test and ensure your project is working correctly. Start the local dev server.

```shell
gatsby develop
```

When the server has started successfully, navigate to http://localhost:8000/ in your web browser.  You will see the Gatsby Starter homepage.  Now copy the filename of the markdown blog post in your **blog** directory and append it to the end of the url in the browser. e.g. http://localhost:8000/2020-01-28-my-first-post 

Tada!!! You should now see your post.  It may look a bit rubbish at the moment, but the foundation is there for you to style it as you like!

![](assets/shot20.png)

To finish up, commit the changes from your local Git repo to your GitHub repo.

**CONGRATULATIONS!!!**

**You now have a fully-working blog!**
