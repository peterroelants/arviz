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
    
      
      
    
      const element = document.getElementById("01dde158-d00c-4a43-a911-b242bd8c4440");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '01dde158-d00c-4a43-a911-b242bd8c4440' but no matching script tag was found.")
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
                    
                  const docs_json = '{"a9c9f10e-471d-4b43-a559-29b0ddb4ed3f":{"defs":[],"roots":{"references":[{"attributes":{"source":{"id":"18076"}},"id":"18081","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":null},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18079","type":"Circle"},{"attributes":{},"id":"18101","type":"AllLabels"},{"attributes":{"coordinates":null,"data_source":{"id":"18076"},"glyph":{"id":"18077"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18079"},"nonselection_glyph":{"id":"18078"},"view":{"id":"18081"}},"id":"18080","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18064"}},"id":"18069","type":"CDSView"},{"attributes":{"children":[{"id":"18117"},{"id":"18115"}]},"id":"18118","type":"Column"},{"attributes":{"tools":[{"id":"18043"},{"id":"18044"},{"id":"18045"},{"id":"18046"},{"id":"18047"},{"id":"18048"},{"id":"18049"},{"id":"18050"}]},"id":"18053","type":"Toolbar"},{"attributes":{},"id":"18110","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18066","type":"Scatter"},{"attributes":{},"id":"18036","type":"BasicTicker"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"18105"},"selection_policy":{"id":"18104"}},"id":"18070","type":"ColumnDataSource"},{"attributes":{},"id":"18111","type":"Selection"},{"attributes":{"overlay":{"id":"18051"}},"id":"18045","type":"BoxZoomTool"},{"attributes":{},"id":"18102","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18077","type":"Circle"},{"attributes":{},"id":"18043","type":"ResetTool"},{"attributes":{},"id":"18103","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"eFcgQvKvPsAoBZqudM8+wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18107"},"selection_policy":{"id":"18106"}},"id":"18076","type":"ColumnDataSource"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"18109"},"selection_policy":{"id":"18108"}},"id":"18082","type":"ColumnDataSource"},{"attributes":{"coordinates":null,"data_source":{"id":"18082"},"glyph":{"id":"18083"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18085"},"nonselection_glyph":{"id":"18084"},"view":{"id":"18087"}},"id":"18086","type":"GlyphRenderer"},{"attributes":{"source":{"id":"18082"}},"id":"18087","type":"CDSView"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18083","type":"MultiLine"},{"attributes":{"coordinates":null,"data_source":{"id":"18070"},"glyph":{"id":"18071"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18073"},"nonselection_glyph":{"id":"18072"},"view":{"id":"18075"}},"id":"18074","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.2},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18085","type":"MultiLine"},{"attributes":{"overlay":{"id":"18052"}},"id":"18047","type":"LassoSelectTool"},{"attributes":{"axis_label":"Log","coordinates":null,"formatter":{"id":"18100"},"group":null,"major_label_policy":{"id":"18101"},"ticker":{"id":"18036"}},"id":"18035","type":"LinearAxis"},{"attributes":{"axis":{"id":"18035"},"coordinates":null,"group":null,"ticker":null},"id":"18038","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18084","type":"MultiLine"},{"attributes":{},"id":"18033","type":"LinearScale"},{"attributes":{},"id":"18098","type":"AllLabels"},{"attributes":{},"id":"18031","type":"LinearScale"},{"attributes":{"coordinates":null,"formatter":{"id":"18097"},"group":null,"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"major_label_policy":{"id":"18098"},"ticker":{"id":"18062"}},"id":"18039","type":"LinearAxis"},{"attributes":{},"id":"18104","type":"UnionRenderers"},{"attributes":{"axis":{"id":"18039"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"18042","type":"Grid"},{"attributes":{"source":{"id":"18088"}},"id":"18093","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"KAWarnTPPsA=","dtype":"float64","order":"little","shape":[1]},"y":[-0.75]},"selected":{"id":"18103"},"selection_policy":{"id":"18102"}},"id":"18064","type":"ColumnDataSource"},{"attributes":{},"id":"18105","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"grey"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18067","type":"Scatter"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18089","type":"Circle"},{"attributes":{"children":[[{"id":"18026"},0,0]]},"id":"18115","type":"GridBox"},{"attributes":{},"id":"18048","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"m/f9Q2zYPcDPGP3dN9s9wA==","dtype":"float64","order":"little","shape":[2]},"y":[0.0,-1.0]},"selected":{"id":"18111"},"selection_policy":{"id":"18110"}},"id":"18088","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"18051","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18090","type":"Circle"},{"attributes":{},"id":"18044","type":"PanTool"},{"attributes":{"end":0.5,"start":-1.5},"id":"18029","type":"DataRange1d"},{"attributes":{"coordinates":null,"group":null},"id":"18095","type":"Title"},{"attributes":{"toolbars":[{"id":"18053"}],"tools":[{"id":"18043"},{"id":"18044"},{"id":"18045"},{"id":"18046"},{"id":"18047"},{"id":"18048"},{"id":"18049"},{"id":"18050"}]},"id":"18116","type":"ProxyToolbar"},{"attributes":{},"id":"18049","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"black"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18091","type":"Circle"},{"attributes":{"toolbar":{"id":"18116"},"toolbar_location":"above"},"id":"18117","type":"ToolbarBox"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"18052","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"dimension":"height","group":null,"line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"18094","type":"Span"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"marker":{"value":"triangle"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18065","type":"Scatter"},{"attributes":{},"id":"18097","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"data_source":{"id":"18088"},"glyph":{"id":"18089"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18091"},"nonselection_glyph":{"id":"18090"},"view":{"id":"18093"}},"id":"18092","type":"GlyphRenderer"},{"attributes":{},"id":"18106","type":"UnionRenderers"},{"attributes":{},"id":"18046","type":"WheelZoomTool"},{"attributes":{},"id":"18107","type":"Selection"},{"attributes":{},"id":"18100","type":"BasicTickFormatter"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18071","type":"MultiLine"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"18062","type":"FixedTicker"},{"attributes":{"coordinates":null,"data_source":{"id":"18064"},"glyph":{"id":"18065"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"18067"},"nonselection_glyph":{"id":"18066"},"view":{"id":"18069"}},"id":"18068","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"18078","type":"Circle"},{"attributes":{"callback":null},"id":"18050","type":"HoverTool"},{"attributes":{},"id":"18027","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.2},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18073","type":"MultiLine"},{"attributes":{"source":{"id":"18070"}},"id":"18075","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"18072","type":"MultiLine"},{"attributes":{},"id":"18108","type":"UnionRenderers"},{"attributes":{"below":[{"id":"18035"}],"center":[{"id":"18038"},{"id":"18042"}],"height":500,"left":[{"id":"18039"}],"output_backend":"webgl","renderers":[{"id":"18068"},{"id":"18074"},{"id":"18080"},{"id":"18086"},{"id":"18092"},{"id":"18094"}],"title":{"id":"18095"},"toolbar":{"id":"18053"},"toolbar_location":null,"width":500,"x_range":{"id":"18027"},"x_scale":{"id":"18031"},"y_range":{"id":"18029"},"y_scale":{"id":"18033"}},"id":"18026","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"18109","type":"Selection"}],"root_ids":["18118"]},"title":"Bokeh Application","version":"2.4.0"}}';
                  const render_items = [{"docid":"a9c9f10e-471d-4b43-a559-29b0ddb4ed3f","root_ids":["18118"],"roots":{"18118":"01dde158-d00c-4a43-a911-b242bd8c4440"}}];
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