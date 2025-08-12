const React = require('react');
require('../../style.css');

const PagePreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data']).toJS();

    return (

        <div className="projectContent">
            <section id="hero">
                    <div id="heroContent">
                        <img id="poster" src="{ data.image }"
                            alt="{ data.mageAlt }" />
                        <div className="projectContext">                                
                            <div className="project-details project-details-title" >PROJECT</div>
                            <div className="project-details project-details-content" >{ data.title }</div> 
                            <div className="project-details project-details-title" >DATES</div>
                            <div className="project-details project-details-content" >{ data.dates }</div>                                 
                            <div className="project-details project-details-title" >COLLABORATOR</div>
                            <div className="project-details project-details-content" >{ data.collaborator }</div>                               
                            <div className="project-details project-details-title" >CONTEXT</div>
                            <div className="project-details project-details-content" >{ data.context }</div>                                
                            <div className="project-details project-details-title" >FUNDERS</div>
                            <div className="project-details project-details-content" > </div>   
                        </div>
                    </div>
            </section>
            <main className="project-content-main">
                {content_blocks.map((block, index) => {
                    if (block.type === "section_heading") {
                        return (
                            <h2 key={index} className="projectContentHeading">
                            {block.heading}
                            </h2>
                        );               
                    } else if (block.type === "text_block") {
                        return (
                            <div key={index} className='projectContentText'>
                                {/* widgetFor renders the markdown */}
                                {widgetFor(`content_blocks.${index}.text`)}
                            </div>
                        ); 
                    } else if (block.type === "image_block") {
                        return (
                            <div key={index} className="projectContentImages">
                            <img src="{block.image}" />
                        </div>
                        )
                    }
                })}       
            </main>
        </div>
    );
};

module.exports = PagePreview;