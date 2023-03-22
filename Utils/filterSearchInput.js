filtered() {
    const filtered = {...this.items};
    const searchText = this.dashboardName.toLowerCase();

    if (filtered.my.length) {
        filtered.my = filtered.my.filter((d) => {
            const filteredProjects = d.projectList.filter((project) => {project.projectName.toLowerCase().indexOf(searchText) !== -1);
                return d.dashboardName.toLowerCase().indexOf(searchText) !== -1 || filteredProjects.length > 0;
        });
    }
    if (filtered.share.length) {
        filtered.share = filtered.share.filter((d) => {
            const filteredProjects = d.projectList.filter((project) => { project.projectName.toLowerCase().indexOf(searchText) !== -1});
            return d.dashboardName.toLowerCase().indexOf(searchText) !== -1 || filteredProjects.length > 0;
        });
    }
    return filtered;
}