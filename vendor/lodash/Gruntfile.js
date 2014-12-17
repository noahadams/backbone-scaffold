module.exports = function(grunt) {
    grunt.registerTask('build_dependency', function() {
        var next = this.async();
        grunt.file.copy('repo/dist/lodash.js', 'lodash.js');
    });


    grunt.registerTask('default', ['build_dependency']);
};
