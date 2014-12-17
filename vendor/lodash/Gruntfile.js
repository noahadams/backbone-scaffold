module.exports = function(grunt) {
    grunt.registerTask('build_dependency', function() {
        var next = this.async();
        grunt.file.copy('repo/dist/lodash.js', 'lodash.js');

        return next();
    });


    grunt.registerTask('default', ['build_dependency']);
};
