body{
    background-color: rgb(227, 255, 227);
    background-repeat: no-repeat;
    background-size: cover;
    margin: 2px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.wrapper{
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 1px;
    height: auto;
    overflow: auto;
    justify-content: center;

}
.container #icon{
    clear: right;
    float: left;
    margin-left: 50px;
}

.container #iconpng{
    height:65px;
    padding-top: 5px;
}

.container #cats{
    clear: right;
    float: left;
}

.container #cats a{
    text-decoration: none;
    color: white;
}

.navbar ul {
    background-color: rgba(4, 61, 4, 0.5);
    overflow: hidden;
    text-align: right;
    padding: 5px;
    height: 60px;
    margin-top: 0;
    margin-bottom: 7px;
    line-height: 60px;
    border-radius: 5px;
    font-size: 150%;
}

.navbar ul p{
    text-align: left;
}

.navbar ul li{
    display: inline;
}
.navbar ul li:last-child{
    padding-right: 20px;
}

.navbar ul li a{
    text-decoration: none;
    color: white;
    transition: font-size .3s, background-color 0s;
    padding-right: 10px;
    padding-left:10px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}


.navbar ul li a:hover{
    font-size: 120%;
    background-color: white;
    color: rgb(4, 61, 4);
    line-height: 0;
}

