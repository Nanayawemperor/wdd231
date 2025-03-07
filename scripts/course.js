function filterCourses(category) {
    let courses = document.querySelectorAll('.course');
    courses.forEach(course => {
        if (category === 'all' || course.textContent.includes(category)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}