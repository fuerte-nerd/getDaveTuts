import React from "react"

export default function TutsSection() {
  return (
    <section className="min-vh-100 d-flex align-items-center cmp_tuts-bg text-secondary position-relative" id="tuts">
     <div class="container py-5">
            <h2 class="display-3 text-center">The tuts directory!</h2>
            <p class="lead text-center">Filter results by typing a search query below...</p>
            <div class="input-group input-group-lg mb-3">
                <input type="text" class="form-control text-cursor" placeholder="Enter your search query here..."
                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button">Search</button>
                </div>
            </div>
            <table class="table-light table table-bordered table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col" class="text-right">Date</th>
                    </tr>
                </thead>
                <tbody class="text-primary">
                    <tr class="tut-link" id="1">
                        <td>How to make a blog with comments in Gatsby</td>
                        <td class="text-right">04/02/2020</td>
                    </tr>
                    <tr class="tut-link" id="2">
                        <td>How to set up a quick dev environment with Bootstrap and Animate.css</td>
                        <td class="text-right">02/02/2020</td>
                    </tr>
                    <tr class="tut-link" id="1">
                        <td>How to make a blog with comments in Gatsby</td>
                        <td class="text-right">04/02/2020</td>
                    </tr>
                    <tr class="tut-link" id="2">
                        <td>How to set up a quick dev environment with Bootstrap and Animate.css</td>
                        <td class="text-right">02/02/2020</td>
                    </tr>
                    <tr class="tut-link" id="1">
                        <td>How to make a blog with comments in Gatsby</td>
                        <td class="text-right">04/02/2020</td>
                    </tr>
                    <tr class="tut-link" id="2">
                        <td>How to set up a quick dev environment with Bootstrap and Animate.css</td>
                        <td class="text-right">02/02/2020</td>
                    </tr>
                </tbody>
            </table>
           
            <h3 class="display-4 text-center">Like what I do?</h3>
            <p class="text-center">Head on over to Facebook and hit the Like button! I'll post on there whenever I
                have new content for you!</p>
            <div class="text-center">
                <a href="archive.html" class="btn btn-primary d-inline-flex align-items-center">
                    <span class="font-weight-bold mr-2 pointer">
                        Check out my Facebook</span>
                    <i class="fab fa-facebook-square  cmp_facebook-btn pointer"></i>
                </a>
            </div>
        </div>
    </section>

  )
}
