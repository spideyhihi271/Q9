import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import ProjectList from '../components/ProjectList';

function Project() {
    return (
        <div className="flex flex-1 h-full">
            <ProjectList />
            <ProjectDetail />
        </div>
    );
}

export default Project;
