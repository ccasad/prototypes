(function () {
  'use strict';

  angular.module('myApp.directives')
    .directive('d3Tree', ['d3', function(d3) {
      return {
        restrict: 'EA',
        scope: {
          data: "=",
          click: "&",
          timestamp: "@"
        },
        link: function(scope, iElement, iAttrs) {

          var margin = {top: 50, right: 20, bottom: 20, left: 20},
              width = 600 - margin.right - margin.left,
              height = 600 - margin.top - margin.bottom;
              
          var i = 0,
              duration = 750,
              root;

          var tree = d3.layout.tree()
              .size([height, width]);

          var diagonal = d3.svg.diagonal()
              .projection(function(d) { return [d.x, d.y]; });

          var svg = d3.select(iElement[0]).append("svg")
              .attr("width", width + margin.right + margin.left)
              .attr("height", height + margin.top + margin.bottom)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          // on window resize, re-render d3 canvas
          window.onresize = function() {
            return scope.$apply();
          };
          
          // Watch for resize event
          scope.$watch(function(){
              return angular.element(window)[0].innerWidth;
            }, function(){
              return scope.render(scope.data);
            }
          );
          
          // watch for data changes and re-render
          scope.$watch('timestamp', function(newVals, oldVals) {
            return scope.render(scope.data);
          }, true);

          // define render function
          scope.render = function(data){
            
            // remove all previous items before render
            svg.selectAll("*").remove();

            root = data;
            root.x0 = height / 2;
            root.y0 = 0;

            // collapses the entire tree to start
            function collapse(d) {
              if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
              }
            }

            //root.children.forEach(collapse);

            update(root);

            d3.select(self.frameElement).style("height", "600px");

          };

          function update(source) {
            // Compute the new tree layout.
            var nodes = tree.nodes(root).reverse();
            var links = tree.links(nodes);

            // Normalize for fixed-depth. Defines the distance between nodes
            nodes.forEach(function(d) { 
              d.y = d.depth * 100;
            });

            // Update the nodes…
            var node = svg.selectAll("g.node")
                .data(nodes, function(d) { return d.id || (d.id = ++i); });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
                .on("click", function(d) {
                  //toggle(d);
                });

            nodeEnter.append('pattern')
                .attr('id', 'personthumbnail')
                .attr('patternUnits', 'userSpaceOnUse')
                .attr('x', 20)
                .attr('y', 20)
                .attr('width', '40')
                .attr('height', '40')
                .append('svg:image')
                .attr('xlink:href', function(d) { return (d.avatarsrc) ? 'images/'+d.avatarsrc : 'images/person0.jpg'; })
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 40)
                .attr('height', 40);

            nodeEnter.append("circle")
                .attr("r", 20)
                .classed('normal', true)
                .style("fill", "url(#personthumbnail)")
                .on("click", function(d) {
                  // ignore the top level
                  if (d.depth > 0) {
                    // remove selected class from any other circle
                    d3.selectAll('circle').classed('selected', false);

                    // add selected class to current circle
                    d3.select(this).classed('selected', true);

                    // update the angularjs side
                    scope.click()(d);
                    scope.$apply();
                  }
                });

            nodeEnter.append("text")
                .attr("y", function(d) { return -20; })
                //.attr("dx", ".15em")
                .attr("dx", "-1.0em")
                .attr("text-anchor", function(d) { return "end"; })
                .text(function(d) { return d.shortname || d.firstname; })
                .style("fill-opacity", 1e-6)
                .style("font", 'bold 12px "Helvetica Neue", Helvetica, Arial, sans-serif');

            // Transition nodes to their new position.
            var nodeUpdate = node.transition()
                .duration(duration)
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

            nodeUpdate.select("text")
                .style("fill-opacity", 1);

            // Transition exiting nodes to the parent's new position.
            var nodeExit = node.exit().transition()
                .duration(duration)
                .attr("transform", function(d) { return "translate(" + source.x + "," + source.y + ")"; })
                .remove();

            nodeExit.select("text")
                .style("fill-opacity", 1e-6);

            // Update the links…
            var link = svg.selectAll("path.link")
                .data(links, function(d) { return d.target.id; });

            // Enter any new links at the parent's previous position.
            link.enter().insert("path", "g")
                .attr("class", "link")
                .attr("d", function(d) {
                  var o = {x: source.x0, y: source.y0};
                  return diagonal({source: o, target: o});
                });

            // Transition links to their new position.
            link.transition()
                .duration(duration)
                .attr("d", diagonal);

            // Transition exiting nodes to the parent's new position.
            link.exit().transition()
                .duration(duration)
                .attr("d", function(d) {
                  var o = {x: source.x, y: source.y};
                  return diagonal({source: o, target: o});
                })
                .remove();

            // Stash the old positions for transition.
            nodes.forEach(function(d) {
              d.x0 = d.x;
              d.y0 = d.y;
            });
          }

          // Toggle children on click.
          function toggle(d) {

            // expands/contracts children nodes
            if (d.children) {
              d._children = d.children;
              d.children = null;
            } else {
              d.children = d._children;
              d._children = null;
            }
            update(d);

          }

        }
      }
    }]);

}());
