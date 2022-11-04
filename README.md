# About this repo

This repo contains multiple projects. This is the second exam for the Web Security course with EC Utbildning.

## For the passing grade

Make a What you see is what you get site that is a blog for a company where employees can create blog entries that can be seen by all visitors on the site. Blog entries should be formatted by users with regular, bold and cursive text only. No other formatting may occur. All blog entries should be displayed on one site and displayed with the formatting the user decided to use. Protect the site against Cross-site scripting.

## For the good grade

The employees should have a secure way of logging into the site so only logged in employees can post new entries. Create the login with help of OAuth2 and OpenID Connect.

The employees should also have a secure way to save and share pictures with each other. Make a site where they can post pictures and save them on a storage solution of your choice. All files should be checked so that only .png and .jpg files can be uploaded.

Secure the front end with protected routing for creating new entries, and the backend with verifying with a JWT token when writing to the database.

### Requirements

You can pick the platform you would like to use. You can use ASP.NET MVC for both backend and frontend or you can use React and ASP.NET Web Api.

Regardless of solution you should protect against XSS and sanitize all user input before it is saved to the database and also encode your output in case malicious code ends up on your platform through other means.

### Additional features implemented

I am choosing to use Typescript with my frontend React implementation.
