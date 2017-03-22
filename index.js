var a = d3.select('#a');
var b = d3.select('#b');

var adata = [34, 22, 20, 8, 16]
var bdata = [36, 28, 15, 6, 15]

var a_data = [{
    'Social Security, Unemployment, and Labor': 34,
    'Medicare and Health': 22,
    'National Defense': 20,
    'Net Interest': 8,
    'Other': 16
}]
var b_data = [{
    'Social Security, Unemployment, and Labor': 36,
    'Medicare and Health': 28,
    'National Defense': 15,
    'Net Interest': 6,
    'Other': 15
}]

var a_bar = a.selectAll("div").data(adata).enter().append("div");
a_bar.style("width", function(d) {
    return d * 10 + "px"; });
a_bar.text(function(d) { return d; });

var b_bar = b.selectAll("div").data(bdata).enter().append("div");
b_bar.style("width", function(d) {
    return d * 10 + "px"; });
b_bar.text(function(d) { return d; });

var myFirstTransition = function(m) {
        dyn.selectAll("div").data(info).transition().style("width", function(d) { return d * m + "px"; }); 
};
