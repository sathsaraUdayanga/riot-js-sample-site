<search>
    <form onsubmit={search}>
        <input ref="search" type="text" placeholder="Serach Giphys">
    </form>

    <script>
        this.on('mount',function(){
            // Focus search
            this.refs.search.focus();
        });

        this.search = function(e){
            e.preventDefault();
            var term = this.refs.search.value;

            //Search the api
            this.giphySearch(term);
        }
    </script>

    <style>
        input::placeholder{
            font-weight:100;
            font-style:italic
        }
    </style>
</search>