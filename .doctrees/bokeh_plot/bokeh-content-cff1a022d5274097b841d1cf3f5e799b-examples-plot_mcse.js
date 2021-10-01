(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("c8f9cced-3942-481b-9578-a051aef0c8ca");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c8f9cced-3942-481b-9578-a051aef0c8ca' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.0.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"52774dd5-0299-4bd7-9d4f-fb6adfd290c2":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"41807"},{"id":"41805"}]},"id":"41808","type":"Column"},{"attributes":{"toolbar":{"id":"41806"},"toolbar_location":"above"},"id":"41807","type":"ToolbarBox"},{"attributes":{"source":{"id":"41747"}},"id":"41752","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41749","type":"Circle"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41799"},"selection_policy":{"id":"41798"}},"id":"41762","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41737","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41765","type":"Circle"},{"attributes":{},"id":"41695","type":"WheelZoomTool"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"41768","type":"Span"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"41701","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"41700"}},"id":"41694","type":"BoxZoomTool"},{"attributes":{},"id":"41798","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"41757"},"glyph":{"id":"41756"},"group":null,"hover_glyph":null,"view":{"id":"41759"}},"id":"41758","type":"GlyphRenderer"},{"attributes":{},"id":"41799","type":"Selection"},{"attributes":{"source":{"id":"41762"}},"id":"41767","type":"CDSView"},{"attributes":{},"id":"41716","type":"LinearScale"},{"attributes":{"axis":{"id":"41688"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41691","type":"Grid"},{"attributes":{"tools":[{"id":"41728"},{"id":"41729"},{"id":"41730"},{"id":"41731"},{"id":"41732"},{"id":"41733"},{"id":"41734"},{"id":"41735"}]},"id":"41738","type":"Toolbar"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"41753","type":"Span"},{"attributes":{},"id":"41712","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41755","type":"Span"},{"attributes":{"toolbars":[{"id":"41702"},{"id":"41738"}],"tools":[{"id":"41692"},{"id":"41693"},{"id":"41694"},{"id":"41695"},{"id":"41696"},{"id":"41697"},{"id":"41698"},{"id":"41699"},{"id":"41728"},{"id":"41729"},{"id":"41730"},{"id":"41731"},{"id":"41732"},{"id":"41733"},{"id":"41734"},{"id":"41735"}]},"id":"41806","type":"ProxyToolbar"},{"attributes":{},"id":"41786","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"41760","type":"Title"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41756","type":"Scatter"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"41754","type":"Span"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41782"},"group":null,"major_label_policy":{"id":"41783"},"ticker":{"id":"41685"}},"id":"41684","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41700","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"41699","type":"HoverTool"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41787"},"selection_policy":{"id":"41786"}},"id":"41757","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"41769","type":"Span"},{"attributes":{},"id":"41800","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"41762"},"glyph":{"id":"41763"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41765"},"nonselection_glyph":{"id":"41764"},"view":{"id":"41767"}},"id":"41766","type":"GlyphRenderer"},{"attributes":{"source":{"id":"41772"}},"id":"41774","type":"CDSView"},{"attributes":{},"id":"41787","type":"Selection"},{"attributes":{},"id":"41801","type":"Selection"},{"attributes":{"end":1,"start":-0.05},"id":"41714","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"41736","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41764","type":"Circle"},{"attributes":{},"id":"41685","type":"BasicTicker"},{"attributes":{"tools":[{"id":"41692"},{"id":"41693"},{"id":"41694"},{"id":"41695"},{"id":"41696"},{"id":"41697"},{"id":"41698"},{"id":"41699"}]},"id":"41702","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41750","type":"Circle"},{"attributes":{"overlay":{"id":"41737"}},"id":"41732","type":"LassoSelectTool"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"41785"},"selection_policy":{"id":"41784"}},"id":"41747","type":"ColumnDataSource"},{"attributes":{},"id":"41785","type":"Selection"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41793"},"group":null,"major_label_policy":{"id":"41794"},"ticker":{"id":"41725"}},"id":"41724","type":"LinearAxis"},{"attributes":{},"id":"41731","type":"WheelZoomTool"},{"attributes":{},"id":"41734","type":"SaveTool"},{"attributes":{"axis_label":"MCSE for quantiles","coordinates":null,"formatter":{"id":"41779"},"group":null,"major_label_policy":{"id":"41780"},"ticker":{"id":"41689"}},"id":"41688","type":"LinearAxis"},{"attributes":{},"id":"41718","type":"LinearScale"},{"attributes":{},"id":"41779","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"41757"}},"id":"41759","type":"CDSView"},{"attributes":{},"id":"41725","type":"BasicTicker"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"41775","type":"Title"},{"attributes":{"overlay":{"id":"41701"}},"id":"41696","type":"LassoSelectTool"},{"attributes":{},"id":"41682","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41763","type":"Circle"},{"attributes":{"children":[[{"id":"41675"},0,0],[{"id":"41711"},0,1]]},"id":"41805","type":"GridBox"},{"attributes":{},"id":"41728","type":"ResetTool"},{"attributes":{},"id":"41680","type":"LinearScale"},{"attributes":{"coordinates":null,"data_source":{"id":"41747"},"glyph":{"id":"41748"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"41750"},"nonselection_glyph":{"id":"41749"},"view":{"id":"41752"}},"id":"41751","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"41684"}],"center":[{"id":"41687"},{"id":"41691"}],"height":500,"left":[{"id":"41688"}],"output_backend":"webgl","renderers":[{"id":"41751"},{"id":"41753"},{"id":"41754"},{"id":"41755"},{"id":"41758"}],"title":{"id":"41760"},"toolbar":{"id":"41702"},"toolbar_location":null,"width":500,"x_range":{"id":"41676"},"x_scale":{"id":"41680"},"y_range":{"id":"41678"},"y_scale":{"id":"41682"}},"id":"41675","subtype":"Figure","type":"Plot"},{"attributes":{"end":1,"start":-0.05},"id":"41678","type":"DataRange1d"},{"attributes":{},"id":"41733","type":"UndoTool"},{"attributes":{"below":[{"id":"41720"}],"center":[{"id":"41723"},{"id":"41727"}],"height":500,"left":[{"id":"41724"}],"output_backend":"webgl","renderers":[{"id":"41766"},{"id":"41768"},{"id":"41769"},{"id":"41770"},{"id":"41773"}],"title":{"id":"41775"},"toolbar":{"id":"41738"},"toolbar_location":null,"width":500,"x_range":{"id":"41712"},"x_scale":{"id":"41716"},"y_range":{"id":"41714"},"y_scale":{"id":"41718"}},"id":"41711","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"41689","type":"BasicTicker"},{"attributes":{},"id":"41697","type":"UndoTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"41748","type":"Circle"},{"attributes":{"overlay":{"id":"41736"}},"id":"41730","type":"BoxZoomTool"},{"attributes":{"axis":{"id":"41720"},"coordinates":null,"group":null,"ticker":null},"id":"41723","type":"Grid"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"41771","type":"Scatter"},{"attributes":{},"id":"41692","type":"ResetTool"},{"attributes":{},"id":"41780","type":"AllLabels"},{"attributes":{},"id":"41729","type":"PanTool"},{"attributes":{},"id":"41782","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"41724"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"41727","type":"Grid"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"41796"},"group":null,"major_label_policy":{"id":"41797"},"ticker":{"id":"41721"}},"id":"41720","type":"LinearAxis"},{"attributes":{},"id":"41693","type":"PanTool"},{"attributes":{"axis":{"id":"41684"},"coordinates":null,"group":null,"ticker":null},"id":"41687","type":"Grid"},{"attributes":{"callback":null},"id":"41735","type":"HoverTool"},{"attributes":{},"id":"41793","type":"BasicTickFormatter"},{"attributes":{},"id":"41783","type":"AllLabels"},{"attributes":{},"id":"41794","type":"AllLabels"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"41801"},"selection_policy":{"id":"41800"}},"id":"41772","type":"ColumnDataSource"},{"attributes":{},"id":"41796","type":"BasicTickFormatter"},{"attributes":{},"id":"41721","type":"BasicTicker"},{"attributes":{},"id":"41698","type":"SaveTool"},{"attributes":{},"id":"41676","type":"DataRange1d"},{"attributes":{},"id":"41784","type":"UnionRenderers"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"41770","type":"Span"},{"attributes":{},"id":"41797","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"41772"},"glyph":{"id":"41771"},"group":null,"hover_glyph":null,"view":{"id":"41774"}},"id":"41773","type":"GlyphRenderer"}],"root_ids":["41808"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"52774dd5-0299-4bd7-9d4f-fb6adfd290c2","root_ids":["41808"],"roots":{"41808":"c8f9cced-3942-481b-9578-a051aef0c8ca"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();