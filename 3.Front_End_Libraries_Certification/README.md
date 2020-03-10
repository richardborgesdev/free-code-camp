# Front End Libraries Certification
## [Bootstrap](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/)
1. [Use Responsive Design with Bootstrap Fluid Containers](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/use-responsive-design-with-bootstrap-fluid-containers)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>
    <div class="container-fluid">
        <h2 class="red-text">CatPhotoApp</h2>

        <p>Click here for <a href="#">cat photos</a>.</p>

        <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

        <p>Things cats love:</p>
        <ul>
            <li>cat nip</li>
            <li>laser pointers</li>
            <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
            <li>flea treatment</li>
            <li>thunder</li>
            <li>other cats</li>
        </ol>
        <form action="/submit-cat-photo">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
            <label><input type="checkbox" name="personality"> Loving</label>
            <label><input type="checkbox" name="personality"> Lazy</label>
            <label><input type="checkbox" name="personality"> Crazy</label>
            <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
        </form>
    </div>
    ```
1. [Make Images Mobile Responsive](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/make-images-mobile-responsive)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

    <div class="container-fluid">
    <h2 class="red-text">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    <img class="img-responsive" src="https://bit.ly/fcc-running-cats" alt="running cat">
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Center Text with Bootstrap](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/center-text-with-bootstrap)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

    <div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Create a Bootstrap Button](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/create-a-bootstrap-button)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

    <div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">

    <button class="btn btn-default">Like</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Create a Block Element Bootstrap Button](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/create-a-block-element-bootstrap-button)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

    <div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <button class="btn btn-default btn-block">Like</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Taste the Bootstrap Button Color Rainbow](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/taste-the-bootstrap-button-color-rainbow)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

    <div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <button class="btn btn-primary btn-block">Like</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Call out Optional Actions with btn-info](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/call-out-optional-actions-with-btn-info)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

    <div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <button class="btn btn-block btn-primary">Like</button>
    <button class="btn btn-block btn-info">Info</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Warn Your Users of a Dangerous Action with btn-danger](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/warn-your-users-of-a-dangerous-action-with-btn-danger)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

    <div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <button class="btn btn-block btn-primary">Like</button>
    <button class="btn btn-block btn-info">Info</button>
    <button class="btn btn-block btn-danger">Delete</button>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Use the Bootstrap Grid to Put Elements Side By Side](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/use-the-bootstrap-grid-to-put-elements-side-by-side)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    .red-text {
        color: red;
    }

    h2 {
        font-family: Lobster, Monospace;
    }

    p {
        font-size: 16px;
        font-family: Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    .smaller-image {
        width: 100px;
    }
    </style>

    <div class="container-fluid">
    <h2 class="red-text text-center">CatPhotoApp</h2>

    <p>Click here for <a href="#">cat photos</a>.</p>

    <a href="#"><img class="smaller-image thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary">Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Ditch Custom CSS for Bootstrap](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/ditch-custom-css-for-bootstrap)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
    </style>

    <div class="container-fluid">
    <h2 class="text-primary text-center">CatPhotoApp</h2>

    <a href="#"><img class="thick-green-border img-responsive" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary">Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Use a span to Target Inline Elements](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/use-a-span-to-target-inline-elements)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>

    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    </style>

    <div class="container-fluid">
    <h2 class="text-primary text-center">CatPhotoApp</h2>

    <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary">Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>

    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Create a Custom Heading](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/create-a-custom-heading)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
    </style>

    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
        <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>

    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary">Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Add Font Awesome Icons to our Buttons](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/add-font-awesome-icons-to-our-buttons)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
    </style>

    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
        <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary">Like <i class="fas fa-thumbs-up"></i></button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info">Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger">Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Add Font Awesome Icons to all of our Buttons](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/add-font-awesome-icons-to-all-of-our-buttons)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
    </style>

    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
        <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary"><i class="fas fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info">Info <i class="fas fa-info-circle"></i></button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger">Delete <i class="fas fa-trash"></i></button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Responsively Style Radio Buttons](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/responsively-style-radio-buttons)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }
    </style>

    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
        <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <div class="row">
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        </div>
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        </div>
        </div>
        <label><input type="checkbox" name="personality"> Loving</label>
        <label><input type="checkbox" name="personality"> Lazy</label>
        <label><input type="checkbox" name="personality"> Crazy</label>

        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Responsively Style Checkboxes](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/responsively-style-checkboxes)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    </style>

    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
        <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <div class="row">
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        </div>
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        </div>
        </div>
        <div class="row">
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Loving</label>
        </div>
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Lazy</label>
        </div>
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Crazy</label>
        </div>
        </div>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
    </form>
    </div>
    ```
1. [Style Text Inputs as Form Controls](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/style-text-inputs-as-form-controls)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    </style>

    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
        <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <div class="row">
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor" class="form-control"> Indoor</label>
        </div>
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor" class="form-control"> Outdoor</label>
        </div>
        </div>
        <div class="row">
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality" class="form-control"> Loving</label>
        </div>
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality" class="form-control"> Lazy</label>
        </div>
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality" class="form-control"> Crazy</label>
        </div>
        </div>
        <input type="text" placeholder="cat photo URL" class="form-control" required>
        <button class="btn btn-primary " type="submit">Submit <i class="fa fa-paper-plane"></i></button>
    </form>
    </div>
    ```
1. [Line up Form Elements Responsively with Bootstrap](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/line-up-form-elements-responsively-with-bootstrap)
    ```html
    <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">
    <style>
    h2 {
        font-family: Lobster, Monospace;
    }

    .thick-green-border {
        border-color: green;
        border-width: 10px;
        border-style: solid;
        border-radius: 50%;
    }

    </style>

    <div class="container-fluid">
    <div class="row">
        <div class="col-xs-8">
        <h2 class="text-primary text-center">CatPhotoApp</h2>
        </div>
        <div class="col-xs-4">
        <a href="#"><img class="img-responsive thick-green-border" src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </div>
    </div>
    <img src="https://bit.ly/fcc-running-cats" class="img-responsive" alt="Three kittens running towards the camera.">
    <div class="row">
        <div class="col-xs-4">
        <button class="btn btn-block btn-primary"><i class="fa fa-thumbs-up"></i> Like</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-info"><i class="fa fa-info-circle"></i> Info</button>
        </div>
        <div class="col-xs-4">
        <button class="btn btn-block btn-danger"><i class="fa fa-trash"></i> Delete</button>
        </div>
    </div>
    <p>Things cats <span class="text-danger">love:</span></p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>
    <form action="/submit-cat-photo">
        <div class="row">
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor"> Indoor</label>
        </div>
        <div class="col-xs-6">
            <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
        </div>
        </div>
        <div class="row">
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Loving</label>
        </div>
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Lazy</label>
        </div>
        <div class="col-xs-4">
            <label><input type="checkbox" name="personality"> Crazy</label>
        </div>
        </div>
        <div class="row">
        <div class="col-xs-7">
            <input type="text" class="form-control" placeholder="cat photo URL" required>
        </div>
        <div class="col-xs-5">
            <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
        </div>
        </div>
    </form>
    </div>
    ```
1. [Create a Bootstrap Headline](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/create-a-bootstrap-headline)
    ```html
    <h3 class="text-primary text-center">jQuery Playground</h3>
    ```
1. [House our page within a Bootstrap container-fluid div](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/house-our-page-within-a-bootstrap-container-fluid-div)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
    </div>
    ```
1. [Create a Bootstrap Row](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/create-a-bootstrap-row)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
        </div>
    </div>
    ```
1. [Split Your Bootstrap Row](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/split-your-bootstrap-row)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
        <div class="col-xs-6">
        </div>
        <div class="col-xs-6">
        </div>
        </div>
    </div>
    ```
1. [Create Bootstrap Wells](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/create-bootstrap-wells)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
        <div class="col-xs-6">
            <div class="well">
            </div>
        </div>
        <div class="col-xs-6">
            <div class="well">
            </div>
        </div>
        </div>
    </div>
    ```
1. [Add Elements within Your Bootstrap Wells](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/add-elements-within-your-bootstrap-wells)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div class="well">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="well">
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Apply the Default Bootstrap Button Style](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/apply-the-default-bootstrap-button-style)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div class="well">
                    <button class="btn btn-default"></button>
                    <button class="btn btn-default"></button>
                    <button class="btn btn-default"></button>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="well">
                    <button class="btn btn-default"></button>
                    <button class="btn btn-default"></button>
                    <button class="btn btn-default"></button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Create a Class to Target with jQuery Selectors](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/create-a-class-to-target-with-jquery-selectors)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div class="well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Add id Attributes to Bootstrap Elements](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/add-id-attributes-to-bootstrap-elements)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <div id="left-well" class="well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
            <div class="col-xs-6">
                <div id="right-well" class="well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Label Bootstrap Wells](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/label-bootstrap-wells)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
                </div>
                <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                    <button class="btn btn-default target"></button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Give Each Element a Unique id](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/give-each-element-a-unique-id)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button id="target1" class="btn btn-default target"></button>
                    <button id="target2" class="btn btn-default target"></button>
                    <button id="target3" class="btn btn-default target"></button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button id="target4" class="btn btn-default target"></button>
                    <button id="target5" class="btn btn-default target"></button>
                    <button id="target6" class="btn btn-default target"></button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Label Bootstrap Buttons](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/label-bootstrap-buttons)
    ```html
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">
                        #target1
                    </button>
                    <button class="btn btn-default target" id="target2">
                        #target2
                    </button>
                    <button class="btn btn-default target" id="target3">
                        #target3
                    </button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">
                        #target4
                    </button>
                    <button class="btn btn-default target" id="target5">
                        #target5
                    </button>
                    <button class="btn btn-default target" id="target6">
                        #target6
                    </button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Use Comments to Clarify Code](https://www.freecodecamp.org/learn/front-end-libraries/bootstrap/use-comments-to-clarify-code)
    ```html
    <!-- Only change code above this line -->
    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
## [jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/)
1. [Learn How Script Tags and Document Ready Work](https://www.freecodecamp.org/learn/front-end-libraries/jquery/learn-how-script-tags-and-document-ready-work)
    ```html
    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    <script>
    $(document).ready(
        function() {

        }
    );
    </script>
    ```
1. [Target HTML Elements with Selectors Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-html-elements-with-selectors-using-jquery)
    ```html
    <script>
        $(document).ready(function() {
            $("button").addClass("animated bounce");
        });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Target Elements by Class Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-elements-by-class-using-jquery)
    ```html
    <script>
        $(document).ready(function() {
            $("button").addClass("animated bounce");
            $(".well").addClass("animated shake");
        });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Target Elements by id Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-elements-by-id-using-jquery)
    ```html
    <script>
    $(document).ready(function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
        $("#target3").addClass("animated fadeOut");
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
                <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Delete Your jQuery Functions](https://www.freecodecamp.org/learn/front-end-libraries/jquery/delete-your-jquery-functions)
    ```html
    <script>
    $(document).ready(function() {
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Target the Same Element with Multiple jQuery Selectors](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-the-same-element-with-multiple-jquery-selectors)
    ```html
    <script>
    $(document).ready(function() {
        $("button").addClass("animated");
        $(".btn").addClass("shake");
        $("#target1").addClass("btn-primary");
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Remove Classes from an Element with jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/remove-classes-from-an-element-with-jquery)
    ```html
    <script>
        $(document).ready(function() {
        $("button").addClass("animated bounce");
        $(".well").addClass("animated shake");
        $("#target3").addClass("animated fadeOut");
        $("button").removeClass("btn-default");
        });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Change the CSS of an Element Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/change-the-css-of-an-element-using-jquery)
    ```html
    <script>
        $(document).ready(function() {
        $("#target1").css("color", "red");

        });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Disable an Element Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/disable-an-element-using-jquery)
    ```html
    <script>
        $(document).ready(function() {
        $("#target1")
            .css("color", "red")
            .prop("disabled", true);
        });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                    <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Change Text Inside an Element Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/change-text-inside-an-element-using-jquery)
    ```html
    <script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target4").html("<em>#target4</em>")
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Remove an Element Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/remove-an-element-using-jquery)
    ```html
    <script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Use appendTo to Move Elements with jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/use-appendto-to-move-elements-with-jquery)
    ```html
    <script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Clone an Element Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/clone-an-element-using-jquery)
    ```html
    <script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Target the Parent of an Element Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-the-parent-of-an-element-using-jquery)
    ```html
    <script>
        $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");

        });
    </script>

    <!-- Only change code above this line. -->

    <body>
        <div class="container-fluid">
            <h3 class="text-primary text-center">jQuery Playground</h3>
            <div class="row">
                <div class="col-xs-6">
                    <h4>#left-well</h4>
                    <div class="well" id="left-well">
                        <button class="btn btn-default target" id="target1">#target1</button>
                        <button class="btn btn-default target" id="target2">#target2</button>
                        <button class="btn btn-default target" id="target3">#target3</button>
                    </div>
                </div>
                <div class="col-xs-6">
                    <h4>#right-well</h4>
                    <div class="well" id="right-well">
                        <button class="btn btn-default target" id="target4">#target4</button>
                        <button class="btn btn-default target" id="target5">#target5</button>
                        <button class="btn btn-default target" id="target6">#target6</button>
                    </div>
                </div>
            </div>
        </div>
    </body>
    ```
1. [Target the Children of an Element Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-the-children-of-an-element-using-jquery)
    ```html
    <script>
        $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");
        $("#right-well").children().css("color", "orange");
        });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Target a Specific Child of an Element Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-a-specific-child-of-an-element-using-jquery)
    ```html
    <script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");
        $("#right-well").children().css("color", "orange");
        $(".target:nth-child(2)").addClass("animated bounce");
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Target Even Elements Using jQuery](https://www.freecodecamp.org/learn/front-end-libraries/jquery/target-even-elements-using-jquery)
    ```html
    <script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");
        $("#right-well").children().css("color", "orange");
        $("#left-well").children().css("color", "green");
        $(".target:nth-child(2)").addClass("animated bounce");
        $(".target:even").addClass("animated shake");
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
1. [Use jQuery to Modify the Entire Page](https://www.freecodecamp.org/learn/front-end-libraries/jquery/use-jquery-to-modify-the-entire-page)
    ```html
    <script>
    $(document).ready(function() {
        $("#target1").css("color", "red");
        $("#target1").prop("disabled", true);
        $("#target4").remove();
        $("#target2").appendTo("#right-well");
        $("#target5").clone().appendTo("#left-well");
        $("#target1").parent().css("background-color", "red");
        $("#right-well").children().css("color", "orange");
        $("#left-well").children().css("color", "green");
        $(".target:nth-child(2)").addClass("animated bounce");
        $(".target:even").addClass("animated shake");
        $("body").addClass("animated hinge");
    });
    </script>

    <!-- Only change code above this line. -->

    <div class="container-fluid">
        <h3 class="text-primary text-center">jQuery Playground</h3>
        <div class="row">
            <div class="col-xs-6">
                <h4>#left-well</h4>
                <div class="well" id="left-well">
                    <button class="btn btn-default target" id="target1">#target1</button>
                    <button class="btn btn-default target" id="target2">#target2</button>
                    <button class="btn btn-default target" id="target3">#target3</button>
                </div>
            </div>
            <div class="col-xs-6">
                <h4>#right-well</h4>
                <div class="well" id="right-well">
                    <button class="btn btn-default target" id="target4">#target4</button>
                    <button class="btn btn-default target" id="target5">#target5</button>
                    <button class="btn btn-default target" id="target6">#target6</button>
                </div>
            </div>
        </div>
    </div>
    ```
## [Sass](https://www.freecodecamp.org/learn/front-end-libraries/sass/)
1. [Store Data with Sass Variables](https://www.freecodecamp.org/learn/front-end-libraries/sass/store-data-with-sass-variables)
    ```html
    <style type='text/sass'>
    $text-color: red;

    .header{
        text-align: center;
    }
    .blog-post, h2 {
        color: $text-color;
    }
    </style>

    <h1 class="header">Learn Sass</h1>
    <div class="blog-post">
        <h2>Some random title</h2>
        <p>This is a paragraph with some random text in it</p>
    </div>
    <div class="blog-post">
        <h2>Header #2</h2>
        <p>Here is some more random text.</p>
    </div>
    <div class="blog-post">
        <h2>Here is another header</h2>
        <p>Even more random text within a paragraph</p>
    </div>
    ```
1. [Nest CSS with Sass](https://www.freecodecamp.org/learn/front-end-libraries/sass/nest-css-with-sass)
    ```html
    <style type='text/sass'>
    .blog-post {
        h1 {
            text-align: center;
            color: blue;
        }
        p {
            font-size: 20px;
        }
    }
    </style>

    <div class="blog-post">
        <h1>Blog Title</h1>
        <p>This is a paragraph</p>
    </div>
    ```
1. [Create Reusable CSS with Mixins](https://www.freecodecamp.org/learn/front-end-libraries/sass/create-reusable-css-with-mixins)
    ```html
    <style type='text/sass'>
    @mixin border-radius($radius) {
        -webkit-border-radius: $radius;
        -moz-border-radius: $radius;
        -ms-border-radius: $radius;
        border-radius: $radius;
    }

    #awesome {
        width: 150px;
        height: 150px;
        background-color: green;
        @include border-radius(15px);
    }
    </style>

    <div id="awesome"></div>
    ```
1. [Use @if and @else to Add Logic To Your Styles](https://www.freecodecamp.org/learn/front-end-libraries/sass/use-if-and-else-to-add-logic-to-your-styles)
    ```html
    <style type='text/sass'>
    @mixin border-stroke($val) {
        @if $val == light {
            border: 1px solid black;
        } @else if $val == medium {
            border: 3px solid black;
        } @else if $val == heavy {
            border: 6px solid black;
        } @else {
            border: none;
        }
    }

    #box {
        width: 150px;
        height: 150px;
        background-color: red;
        @include border-stroke(medium);
    }
    </style>

    <div id="box"></div>
    ```
1. [Use @for to Create a Sass Loop](https://www.freecodecamp.org/learn/front-end-libraries/sass/use-for-to-create-a-sass-loop)
    ```html
    <style type='text/sass'>
    @for $j from 1 through 6 {
        .text-#{$j} {
            font-size: 15 * $j;
        }
    }
    </style>

    <p class="text-1">Hello</p>
    <p class="text-2">Hello</p>
    <p class="text-3">Hello</p>
    <p class="text-4">Hello</p>
    <p class="text-5">Hello</p>
    ```
1. [Use @each to Map Over Items in a List](https://www.freecodecamp.org/learn/front-end-libraries/sass/use-each-to-map-over-items-in-a-list)
    ```html
    <style type='text/sass'>
    $colors: (1: blue, 2: black, 3: red);

    @each $key, $color in $colors {
        .#{$color}-bg {
        background-color: $color;
        }
    }

    div {
        height: 200px;
        width: 200px;
    }
    </style>

    <div class="blue-bg"></div>
    <div class="black-bg"></div>
    <div class="red-bg"></div>
    ```
1. [Apply a Style Until a Condition is Met with @while](https://www.freecodecamp.org/learn/front-end-libraries/sass/apply-a-style-until-a-condition-is-met-with-while)
    ```html
    <style type='text/sass'>
    $x: 1;
    @while $x < 11 {
        .text-#{$x} {
            font-size: 15 * $x;
        }
        $x: $x + 1;
    }
    </style>

    <p class="text-1">Hello</p>
    <p class="text-2">Hello</p>
    <p class="text-3">Hello</p>
    <p class="text-4">Hello</p>
    <p class="text-5">Hello</p>
    <p class="text-6">Hello</p>
    <p class="text-7">Hello</p>
    <p class="text-8">Hello</p>
    <p class="text-9">Hello</p>
    <p class="text-10">Hello</p>
    ```
1. [Split Your Styles into Smaller Chunks with Partials](https://www.freecodecamp.org/learn/front-end-libraries/sass/split-your-styles-into-smaller-chunks-with-partials)
    ```scss
    // The main.scss file
    @import 'variables'
    ```
1. [Extend One Set of CSS Styles to Another Element](https://www.freecodecamp.org/learn/front-end-libraries/sass/extend-one-set-of-css-styles-to-another-element)
    ```html
    <style type='text/sass'>
    h3{
        text-align: center;
    }
    .info{
        width: 200px;
        border: 1px solid black;
        margin: 0 auto;
    }
    .info-important {
        @extend .info;
        background-color: magenta;
    }
    </style>
    <h3>Posts</h3>
    <div class="info-important">
        <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
    </div>

    <div class="info">
        <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
    </div>
    ```
## [React](https://www.freecodecamp.org/learn/front-end-libraries/react/)
1. [Create a Simple JSX Element](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-simple-jsx-element)
    ```jsx
    const JSX = <h1>Hello JSX!</h1>;
    ```
1. [Create a Complex JSX Element](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-complex-jsx-element)
    ```jsx
    // write your code here
    const JSX = <div>
        <h1>h1</h1>
        <p>Paragraph</p>
        <ul>
            <li>li1</li>
            <li>li2</li>
            <li>li3</li>
        </ul>
    </div>
    ```
1. [Add Comments in JSX](https://www.freecodecamp.org/learn/front-end-libraries/react/add-comments-in-jsx)
    ```jsx
    const JSX = (
        <div>
            {/* comment */}
            <h1>This is a block of JSX</h1>
            <p>Here's a subtitle</p>
        </div>
    );
    ```
1. [Render HTML Elements to the DOM](https://www.freecodecamp.org/learn/front-end-libraries/react/render-html-elements-to-the-dom)
    ```jsx
    const JSX = (
        <div>
            <h1>Hello World</h1>
            <p>Lets render this to the DOM</p>
        </div>
    );
    // change code below this line
    ReactDOM.render(JSX, document.getElementById("challenge-node"))
    ```
1. [Define an HTML Class in JSX](https://www.freecodecamp.org/learn/front-end-libraries/react/define-an-html-class-in-jsx)
    ```jsx
    const JSX = (
        <div className="myDiv">
            <h1>Add a class to this div</h1>
        </div>
    );
    ```
1. [Learn About Self-Closing JSX Tags](https://www.freecodecamp.org/learn/front-end-libraries/react/learn-about-self-closing-jsx-tags)
    ```jsx
    const JSX = (
        <div>
            <h2>Welcome to React!</h2> <br />
            <p>Be sure to close all tags!</p>
            <hr />
        </div>
    );
    ```
1. [Create a Stateless Functional Component](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-stateless-functional-component)
    ```jsx
    const MyComponent = function() {
        // change code below this line
        return (
            <div>
                string of text
            </div>
        );
        // change code above this line
    }
    ```
1. [Create a React Component](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-react-component)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            // change code below this line
            return (
                <div>
                    <h1>Hello React!</h1>
                </div>
            );
            // change code above this line
        }
    };
    ```
1. [Create a Component with Composition](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-component-with-composition)
    ```jsx
    const ChildComponent = () => {
        return (
            <div>
                <p>I am the child</p>
            </div>
        );
    };

    class ParentComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div>
                    <h1>I am the parent</h1>
                    <ChildComponent />
                </div>
            );
        }
    };
    ```
1. [Use React to Render Nested Components](https://www.freecodecamp.org/learn/front-end-libraries/react/use-react-to-render-nested-components)
    ```jsx
    const TypesOfFruit = () => {
        return (
            <div>
                <h2>Fruits:</h2>
                <ul>
                    <li>Apples</li>
                    <li>Blueberries</li>
                    <li>Strawberries</li>
                    <li>Bananas</li>
                </ul>
            </div>
        );
    };

    const Fruits = () => {
        return (
            <div>
            <TypesOfFruit />
            </div>
        );
    };

    class TypesOfFood extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
            </div>
            );
        }
    };
    ```
1. [Compose React Components](https://www.freecodecamp.org/learn/front-end-libraries/react/compose-react-components)
    ```jsx
    class Fruits extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
            <div>
                <h2>Fruits:</h2>
                <NonCitrus />
                <Citrus />
            </div>
            );
        }
    };

    class TypesOfFood extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
                <Vegetables />
            </div>
            );
        }
    };
    ```
1. [Render a Class Component to the DOM](https://www.freecodecamp.org/learn/front-end-libraries/react/render-a-class-component-to-the-dom)
    ```jsx
    class TypesOfFood extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
                <Vegetables />
            </div>
            );
        }
    };


    // change code below this line
    ReactDOM.render(
        <TypesOfFood />,
        document.getElementById('challenge-node')
    );
    ```
1. [Write a React Component from Scratch](https://www.freecodecamp.org/learn/front-end-libraries/react/write-a-react-component-from-scratch)
    ```jsx
    // change code below this line
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
            <div>
                <h1>My First React Component!</h1>
            </div>
            );
        }
    };

    ReactDOM.render(
        <MyComponent />,
        document.getElementById('challenge-node')
    );
    ```
1. [Pass Props to a Stateless Functional Component](https://www.freecodecamp.org/learn/front-end-libraries/react/pass-props-to-a-stateless-functional-component)
    ```jsx
    const CurrentDate = (props) => {
        return (
            <div>
            { /* change code below this line */ }
            <p>The current date is: {props.date}</p>
            { /* change code above this line */ }
            </div>
        );
    };

    class Calendar extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h3>What date is it?</h3>
                    { /* change code below this line */ }
                    <CurrentDate date={Date()}/>
                    { /* change code above this line */ }
                </div>
            );
        }
    };

    ```
1. [Pass an Array as Props](https://www.freecodecamp.org/learn/front-end-libraries/react/pass-an-array-as-props)
    ```jsx
    const List = (props) => {
        { /* change code below this line */ }
        return <p>{props.tasks.join(', ')}</p>
        { /* change code above this line */ }
    };

    class ToDo extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>To Do Lists</h1>
                    <h2>Today</h2>
                    { /* change code below this line */ }
                    <List tasks={["green", "blue", "red"]} />
                    <h2>Tomorrow</h2>
                    <List tasks={["green", "blue", "red"]} />
                    { /* change code above this line */ }
                </div>
            );
        }
    };
    ```
1. [Use Default Props](https://www.freecodecamp.org/learn/front-end-libraries/react/use-default-props)
    ```jsx
    const ShoppingCart = (props) => {
        return (
            <div>
                <h1>Shopping Cart Component</h1>
            </div>
        )
    };
    // change code below this line
    ShoppingCart.defaultProps = {
        items: 0
    }
    ```
1. [Override Default Props](https://www.freecodecamp.org/learn/front-end-libraries/react/override-default-props)
    ```jsx
    const Items = (props) => {
        return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    }

    Items.defaultProps = {
        quantity: 0
    }

    class ShoppingCart extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            { /* change code below this line */ }
            return <Items quantity={10}/>
            { /* change code above this line */ }
        }
    };
    ```
1. [Use PropTypes to Define the Props You Expect](https://www.freecodecamp.org/learn/front-end-libraries/react/use-proptypes-to-define-the-props-you-expect)
    ```jsx
    const Items = (props) => {
        return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
    };

    // change code below this line
    Items.propTypes = {
        quantity: PropTypes.number.isRequired
    }
    // change code above this line

    Items.defaultProps = {
        quantity: 0
    };

    class ShoppingCart extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <Items />
        }
    };
    ```
1. [Access Props Using this.props](https://www.freecodecamp.org/learn/front-end-libraries/react/access-props-using-this.props)
    ```jsx
    class ReturnTempPassword extends React.Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
                <div>
                    { /* change code below this line */ }
                    <p>
                        Your temporary password is:
                        <strong>{this.props.tempPassword}</strong>
                    </p>
                    { /* change code above this line */ }
                </div>
            );
        }
    };

    class ResetPassword extends React.Component {
        constructor(props) {
            super(props);

        }
        render() {
            return (
                <div>
                    <h2>Reset Password</h2>
                    <h3>We've generated a new temporary password for you.</h3>
                    <h3>Please reset this password from your account settings ASAP.</h3>
                    { /* change code below this line */ }
                    <ReturnTempPassword tempPassword="11111111"/>
                    { /* change code above this line */ }
                </div>
            );
        }
    };
    ```
1. [Review Using Props with Stateless Functional Components](https://www.freecodecamp.org/learn/front-end-libraries/react/review-using-props-with-stateless-functional-components)
    ```jsx
    class CampSite extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <Camper/>
                </div>
            );
        }
    };

    // change code below this line
    class Camper extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
            <div>
                <p>
                    {this.props.name}
                </p>
            </div>
            );
        }
    };

    Camper.defaultProps = {
        name: 'CamperBot'
    };

    Camper.propTypes = {
        name: PropTypes.string.isRequired
    }
    ```
1. [Create a Stateful Component](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-stateful-component)
    ```jsx
    class StatefulComponent extends React.Component {
        constructor(props) {
            super(props);
            // initialize state here
            this.state = {
                name: 'name'
            };
        }
        render() {
            return (
                <div>
                <h1>{this.state.name}</h1>
                </div>
            );
        }
    };

    ```
1. [Render State in the User Interface](https://www.freecodecamp.org/learn/front-end-libraries/react/render-state-in-the-user-interface)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'freeCodeCamp'
            }
        }
        render() {
            return (
            <div>
                { /* change code below this line */ }
                <h1>{this.state.name}</h1>
                { /* change code above this line */ }
            </div>
            );
        }
    };
    ```
1. [Render State in the User Interface Another Way](https://www.freecodecamp.org/learn/front-end-libraries/react/render-state-in-the-user-interface-another-way)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'freeCodeCamp'
            }
        }
        render() {
            // change code below this line
            const name = this.state.name;
            // change code above this line
            return (
                <div>
                    { /* change code below this line */ }
                    <h1>{name}</h1>
                    { /* change code above this line */ }
                </div>
            );
        }
    };
    ```
1. [Set State with this.setState](https://www.freecodecamp.org/learn/front-end-libraries/react/set-state-with-this.setstate)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'Initial State'
            };
            this.handleClick = this.handleClick.bind(this);
        }
        handleClick() {
            // change code below this line
            this.setState({
                name: 'React Rocks!'
            });
            // change code above this line
        }
        render() {
            return (
                <div>
                    <button onClick={this.handleClick}>Click Me</button>
                    <h1>{this.state.name}</h1>
                </div>
            );
        }
    };
    ```
1. [Bind 'this' to a Class Method](https://www.freecodecamp.org/learn/front-end-libraries/react/bind-this-to-a-class-method)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                text: "Hello"
            };
            // change code below this line
            this.handleClick = this.handleClick.bind(this);
            // change code above this line
        }
        handleClick() {
            this.setState({
            text: "You clicked!"
            });
        }
        render() {
            return (
                <div>
                    { /* change code below this line */ }
                    <button onClick={this.handleClick}>Click Me</button>
                    { /* change code above this line */ }
                    <h1>{this.state.text}</h1>
                </div>
            );
        }
    };
    ```
1. [Use State to Toggle an Element](https://www.freecodecamp.org/learn/front-end-libraries/react/use-state-to-toggle-an-element)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                visibility: false
            };
            // change code below this line
            this.toggleVisibility = this.toggleVisibility.bind(this);
            // change code above this line
        }
        // change code below this line
        toggleVisibility() {
            this.setState(state => ({
                visibility: !state.visibility
            }));
        }
        // change code above this line
        render() {
            if (this.state.visibility) {
                return (
                    <div>
                        <button onClick={this.toggleVisibility}>Click Me</button>
                        <h1>Now you see me!</h1>
                    </div>
                );
            } else {
                return (
                    <div>
                        <button onClick={this.toggleVisibility}>Click Me</button>
                    </div>
                );
            }
        }
    };
    ```
1. [Write a Simple Counter](https://www.freecodecamp.org/learn/front-end-libraries/react/write-a-simple-counter)
    ```jsx
    class Counter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
            // change code below this line
            this.increment = this.increment.bind(this);
            this.decrement = this.decrement.bind(this);
            this.reset = this.reset.bind(this);
            // change code above this line
        }
        // change code below this line
        reset() {
            this.setState({
                count: 0
            });
        }
        increment() {
            this.setState(state => ({
                count: state.count + 1
            }));
        }
        decrement() {
            this.setState(state => ({
                count: state.count - 1
            }));
        }
        // change code above this line
        render() {
            return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <button className='reset' onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
            );
        }
    };
    ```
1. [Create a Controlled Input](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-controlled-input)
    ```jsx
    class ControlledInput extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: ''
            };
            // change code below this line
            this.handleChange = this.handleChange.bind(this);
            // change code above this line
        }
        // change code below this line
        handleChange(event) {
            this.setState({
                input: event.target.value
            });
        }
        // change code above this line
        render() {
            return (
            <div>
                { /* change code below this line */}
                <input value={this.state.input} onChange={this.handleChange}/>
                { /* change code above this line */}
                <h4>Controlled Input:</h4>
                <p>{this.state.input}</p>
            </div>
            );
        }
    };
    ```
1. [Create a Controlled Form](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-controlled-form)
    ```jsx
    class MyForm extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                input: '',
                submit: ''
            };
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }
        handleChange(event) {
            this.setState({
                input: event.target.value
            });
        }
        handleSubmit(event) {
            // change code below this line
            {event.preventDefault()}
            this.setState({
                submit: this.state.input
            });
            // change code above this line
        }
        render() {
            return (
            <div>
                <form onSubmit={this.handleSubmit}>
                { /* change code below this line */ }
                <input value={this.state.input} onChange={this.handleChange}/>
                { /* change code above this line */ }
                <button type='submit'>Submit!</button>
                </form>
                { /* change code below this line */ }
                <h1>{this.state.submit}</h1>
                { /* change code above this line */ }
            </div>
            );
        }
    };
    ```
1. [Pass State as Props to Child Components](https://www.freecodecamp.org/learn/front-end-libraries/react/pass-state-as-props-to-child-components)
    ```jsx
    class MyApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: 'CamperBot'
            }
        }
        render() {
            return (
                <div>
                    <Navbar name={this.state.name} />
                </div>
            );
        }
    };

    class Navbar extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h1>Hello, my name is: {this.props.name} </h1>
                </div>
            );
        }
    };
    ```
1. [Pass a Callback as Props](https://www.freecodecamp.org/learn/front-end-libraries/react/pass-a-callback-as-props)
    ```jsx
    class MyApp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                inputValue: ''
            }
            this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
            this.setState({
                inputValue: event.target.value
            });
        }
        render() {
            return (
                <div>
                    <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
                    <RenderInput input={this.state.inputValue} />
                </div>
            );
        }
    };

    class GetInput extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h3>Get Input:</h3>
                    <input
                        value={this.props.input}
                    onChange={this.props.handleChange}/>
                </div>
            );
        }
    };

    class RenderInput extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (
                <div>
                    <h3>Input Render:</h3>
                    <p>{this.props.input}</p>
                </div>
            );
        }
    };
    ```
1. [Use the Lifecycle Method componentWillMount](https://www.freecodecamp.org/learn/front-end-libraries/react/use-the-lifecycle-method-componentwillmount)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        componentWillMount() {
            console.log("will mount!!");
        }
        render() {
            return <div />
        }
    };
    ```
1. [Use the Lifecycle Method componentDidMount](https://www.freecodecamp.org/learn/front-end-libraries/react/use-the-lifecycle-method-componentdidmount)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
            activeUsers: null
            };
        }
        componentDidMount() {
            setTimeout( () => {
                this.setState({
                    activeUsers: 1273
                });
            }, 2500);
        }
        render() {
            return (
                <div>
                    <h1>Active Users: {this.state.activeUsers}</h1>
                </div>
            );
        }
    };
    ```
1. [Add Event Listeners](https://www.freecodecamp.org/learn/front-end-libraries/react/add-event-listeners)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                message: ''
            };
            this.handleEnter = this.handleEnter.bind(this);
            this.handleKeyPress = this.handleKeyPress.bind(this);
        }
        // change code below this line
        componentDidMount() {
            document.addEventListener(
            "keydown",
            this.handleKeyPress
            );
        }
        componentWillUnmount() {
            document.removeEventListener(
            "keydown",
            this.handleKeyPress
            )
        }
        // change code above this line
        handleEnter() {
            this.setState(state => ({
                message: state.message + 'You pressed the enter key! '
            }));
        }
        handleKeyPress(event) {
            if (event.keyCode === 13) {
                this.handleEnter();
            }
        }
        render() {
            return (
                <div>
                    <h1>{this.state.message}</h1>
                </div>
            );
        }
    };
    ```
1. [Optimize Re-Renders with shouldComponentUpdate](https://www.freecodecamp.org/learn/front-end-libraries/react/optimize-re-renders-with-shouldcomponentupdate)
    ```jsx
    class OnlyEvens extends React.Component {
        constructor(props) {
            super(props);
        }
        shouldComponentUpdate(nextProps, nextState) {
            console.log('Should I update?');
            // change code below this line
            if (nextProps.value % 2 == 0) {
                return true;
            }
                return false;
            // change code above this line
        }
        componentWillReceiveProps(nextProps) {
            console.log('Receiving new props...');
        }
        componentDidUpdate() {
            console.log('Component re-rendered.');
        }
        render() {
            return <h1>{this.props.value}</h1>
        }
    };

    class Controller extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                value: 0
            };
            this.addValue = this.addValue.bind(this);
        }
        addValue() {
            this.setState({
                value: this.state.value + 1
            });
        }
        render() {
            return (
                <div>
                    <button onClick={this.addValue}>Add</button>
                    <OnlyEvens value={this.state.value}/>
                </div>
            );
        }
    };
    ```
1. [Introducing Inline Styles](https://www.freecodecamp.org/learn/front-end-libraries/react/introducing-inline-styles)
    ```jsx
    class Colorful extends React.Component {
        render() {
            return (
                <div
                    style={{
                        color: 'red',
                        fontSize: '72px'
                    }}
                >
                    Big Red
                </div>
            );
        }
    };

    ```
1. [Add Inline Styles in React](https://www.freecodecamp.org/learn/front-end-libraries/react/add-inline-styles-in-react)
    ```jsx
    const styles = {
        color: "purple",
        fontSize: 40,
        border: "2px solid purple"
    };
    // change code above this line
    class Colorful extends React.Component {
        render() {
            // change code below this line
            return (
                <div style={styles}>Style Me!</div>
            );
            // change code above this line
        }
    };
    ```
1. [Use Advanced JavaScript in React Render Method](https://www.freecodecamp.org/learn/front-end-libraries/react/use-advanced-javascript-in-react-render-method)
    ```jsx
    const inputStyle = {
        width: 235,
        margin: 5
    }

    class MagicEightBall extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                userInput: '',
                randomIndex: ''
            }
            this.ask = this.ask.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }
        ask() {
            if (this.state.userInput) {
                this.setState({
                    randomIndex: Math.floor(Math.random() * 20),
                    userInput: ''
                });
            }
        }
        handleChange(event) {
            this.setState({
                userInput: event.target.value
            });
        }
        render() {
            const possibleAnswers = [
                'It is certain',
                'It is decidedly so',
                'Without a doubt',
                'Yes, definitely',
                'You may rely on it',
                'As I see it, yes',
                'Outlook good',
                'Yes',
                'Signs point to yes',
                'Reply hazy try again',
                'Ask again later',
                'Better not tell you now',
                'Cannot predict now',
                'Concentrate and ask again',
                'Don\'t count on it',
                'My reply is no',
                'My sources say no',
                'Most likely',
                'Outlook not so good',
                'Very doubtful'
            ];
            const answer = possibleAnswers[this.state.randomIndex];
            return (
                <div>
                    <input
                        type="text"
                        value={this.state.userInput}
                        onChange={this.handleChange}
                        style={inputStyle} /><br />
                    <button onClick={this.ask}>
                        Ask the Magic Eight Ball!
                    </button><br />
                    <h3>Answer:</h3>
                    <p>
                        {answer}
                    </p>
                </div>
            );
        }
    };
    ```
1. [Render with an If-Else Condition](https://www.freecodecamp.org/learn/front-end-libraries/react/render-with-an-if-else-condition)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                display: true
            }
            this.toggleDisplay = this.toggleDisplay.bind(this);
        }
        toggleDisplay() {
            this.setState({
                display: !this.state.display
            });
        }
        render() {
            // change code below this line
            if (this.state.display) {
                return (
                    <div>
                        <button onClick={this.toggleDisplay}>Toggle Display</button>
                        <h1>Displayed!</h1>
                    </div>
                );
            } else {
                return (
                    <div>
                        <button onClick={this.toggleDisplay}>Toggle Display</button>
                    </div>
                );
            }
        }
    };
    ```
1. [Use && for a More Concise Conditional](https://www.freecodecamp.org/learn/front-end-libraries/react/use--for-a-more-concise-conditional)
    ```jsx
    class MyComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                display: true
            }
            this.toggleDisplay = this.toggleDisplay.bind(this);
        }
        toggleDisplay() {
            this.setState({
                display: !this.state.display
            });
        }
        render() {
            // change code below this line
            return (
                <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.display && <h1>Displayed!</h1>}
                </div>
            );
        }
    };
    ```
1. [Use a Ternary Expression for Conditional Rendering]()
    ```html
    ```
1. [Render Conditionally from Props]()
    ```html
    ```
1. [Change Inline CSS Conditionally Based on Component State]()
    ```html
    ```
1. [Use Array.map() to Dynamically Render Elements]()
    ```html
    ```
1. [Give Sibling Elements a Unique Key Attribute]()
    ```html
    ```
1. [Use Array.filter() to Dynamically Filter an Array]()
    ```html
    ```
1. [Render React on the Server with renderToString]()
    ```html
    ```
## [Redux]()
## [React and Redux]()
## [Front End Libraries Projects]()