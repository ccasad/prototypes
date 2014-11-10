(function () {
  'use strict';

  angular.module('myApp.directives')
    .directive('d3Tree', ['d3', function(d3) {
      return {
        restrict: 'EA',
        scope: {
          data: "="
        },
        link: function(scope, iElement, iAttrs) {

          var margin = {top: 50, right: 20, bottom: 20, left: 120},
              width = 960 - margin.right - margin.left,
              height = 800 - margin.top - margin.bottom;
              
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

          svg.append("rect")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("fill", "yellow")
            .style("opacity", 0.1);

          // on window resize, re-render d3 canvas
          window.onresize = function() {
            return scope.$apply();
          };
          
          
          scope.$watch(function(){
              return angular.element(window)[0].innerWidth;
            }, function(){
              return scope.render(scope.data);
            }
          );
          
          /*
          // watch for data changes and re-render
          scope.$watch('data', function(newVals, oldVals) {
            return scope.render(newVals);
          }, true);
          */

          // define render function
          scope.render = function(data){
            // remove all previous items before render
            svg.selectAll("*").remove();

            root = data;
            root.x0 = height / 2;
            root.y0 = 0;

            function collapse(d) {
              if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
              }
            }

            root.children.forEach(collapse);
            scope.update(root);

            d3.select(self.frameElement).style("height", "800px");

          };

          scope.update = function(source) {
            // Compute the new tree layout.
            var nodes = tree.nodes(root).reverse();
            var links = tree.links(nodes);

            // Normalize for fixed-depth.
            nodes.forEach(function(d) { d.y = d.depth * 180; });

            // Update the nodes…
            var node = svg.selectAll("g.node")
                .data(nodes, function(d) { return d.id || (d.id = ++i); });

            // Enter any new nodes at the parent's previous position.
            var nodeEnter = node.enter().append("g")
                .attr("class", "node")
                .attr("transform", function(d) { return "translate(" + source.x0 + "," + source.y0 + ")"; })
                .on("click", scope.click);

            nodeEnter.append('pattern')
                .attr('id', 'personthumbnail')
                .attr('patternUnits', 'userSpaceOnUse')
                .attr('x', 20)
                .attr('y', 20)
                .attr('width', '40')
                .attr('height', '40')
                .append('svg:image')
                .attr('xlink:href', function(d) { return 'images/'+d.avatarsrc; })
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', 40)
                .attr('height', 40);

            nodeEnter.append("circle")
                .attr("r", 20)
                .style("fill", "transparent")       // this code works OK
                .style("stroke", "black")     // displays small black dot
                .style("stroke-width", 0.25)
                .style("fill", "url(#personthumbnail)");

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
          scope.click = function(d) {
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
    }])
    .directive('d3Bars', ['d3', function(d3) {
      return {
        restrict: 'EA',
        scope: {
          data: "=",
          label: "@",
          onClick: "&"
        },
        link: function(scope, iElement, iAttrs) {
          var svg = d3.select(iElement[0])
              .append("svg")
              .attr("width", "100%");

          // on window resize, re-render d3 canvas
          window.onresize = function() {
            return scope.$apply();
          };
          scope.$watch(function(){
              return angular.element(window)[0].innerWidth;
            }, function(){
              return scope.render(scope.data);
            }
          );

          // watch for data changes and re-render
          scope.$watch('data', function(newVals, oldVals) {
            return scope.render(newVals);
          }, true);

          // define render function
          scope.render = function(data){
            // remove all previous items before render
            svg.selectAll("*").remove();

            // setup variables
            var width, height, max;
            width = d3.select(iElement[0])[0][0].offsetWidth - 20;
              // 20 is for margins and can be changed
            height = scope.data.length * 35;
              // 35 = 30(bar height) + 5(margin between bars)
            max = 98;
              // this can also be found dynamically when the data is not static
              // max = Math.max.apply(Math, _.map(data, ((val)-> val.count)))

            // set the height based on the calculations above
            svg.attr('height', height);

            //create the rectangles for the bar chart
            svg.selectAll("rect")
              .data(data)
              .enter()
                .append("rect")
                .on("click", function(d, i){return scope.onClick({item: d});})
                .attr("height", 30) // height of each bar
                .attr("width", 0) // initial width of 0 for transition
                .attr("x", 10) // half of the 20 side margin specified above
                .attr("y", function(d, i){
                  return i * 35;
                }) // height + margin between bars
                .transition()
                  .duration(1000) // time of duration
                  .attr("width", function(d){
                    return d.score/(max/width);
                  }); // width based on scale

            svg.selectAll("text")
              .data(data)
              .enter()
                .append("text")
                .attr("fill", "#fff")
                .attr("y", function(d, i){return i * 35 + 22;})
                .attr("x", 15)
                .text(function(d){return d[scope.label];});

          };
        }
      };
    }]);

}());
