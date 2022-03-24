
        document.getElementById("exec_tree")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("myButton").click();
            }
        });
        function buttonCodeTree()
        {
            let text = document.getElementById("exec_tree").value;
            let data = {element: text};

            fetch("http://127.0.0.1:5005/exec", {
              method: "POST",
              headers: {'Content-Type': 'application/json'}, 
              body: JSON.stringify(data)
            },
          {
            mode: 'no-cors',
            method: 'post',
            url: `http://127.0.0.1:5005/`,
            credentials: 'include'
          }
            ).then(res => {
                window.location.reload();
              console.log("Request complete! response:", res);
            });
        }
        //word graph
        document.getElementById("exec_word")
            .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("myWordButton").click();
            }
        });
        function buttonCodeWord()
        {
            let text = document.getElementById("exec_word").value;
            let data = {element: text};

            fetch("http://127.0.0.1:5000/exec", {
              method: "POST",
              headers: {'Content-Type': 'application/json'}, 
              body: JSON.stringify(data)
            },
          {
            mode: 'no-cors',
            method: 'post',
            url: `http://127.0.0.1:5000/`,
            credentials: 'include'
          }
            ).then(res => {
                window.location.reload();
              console.log("Request complete! response:", res);
            });
        }

        //animation
        document.addEventListener("click",function (e) {
            var body = document.querySelector('body');
            var bubbles = document.createElement("span");
            var x = e.offsetX;
            var y = e.offsetY;
            bubbles.style.left = x+'px';
            bubbles.style.top = y+'px';
            var size = Math.random() * 1000;
            bubbles.style.width = 20 + size+'px';
            bubbles.style.height = 20 + size+'px';
            body.appendChild(bubbles);

            setTimeout(function () {
                bubbles.remove();
            },4000)
        })
