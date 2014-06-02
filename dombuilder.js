(function(global) {

    function dom(query, attrs, childs){
        var match = query.match(/^([^#.]*)#?([^.$]*).?(\S*)/),
            type = match[1]||"div",
            id = match[2]
            classes = match[3].replace(/\./g, " ");

        var element = document.createElement(type),
            key;

        if(attrs && attrs.constructor === Array) {
            childs = attrs;
            attrs = null;
        }

        if(attrs !== undefined){
            if(typeof attrs == 'string' || typeof attrs == "number") {
                element.innerHTML = attrs;
            } else {
                for(key in attrs){
                    if(attrs.hasOwnProperty(key)){
                        if(key === "id" || key === "innerHTML" || key === "value" || key === "src" || key === "className"){
                            element[key] = attrs[key];
                        }else{
                            element.setAttribute(key, attrs[key]);
                        }
                    }
                }
            }            
        }

        id && element.setAttribute("id", id);
        classes && element.setAttribute("class", classes);

        childs && childs.forEach(function(child){
           element.appendChild(child);
        });
        return element;
    };

    global.dom = dom;

})(window);
