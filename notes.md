- Project page:
  - extra category for downloads
  - main image should be no larger than height of window
  - Mark can write category titles 
  - image text goes under image
  - have a way to make image text smaller

- Home page
 - the context text under the image should not be in the project page
 - copyright text left aligned 
 - copyright text more gray 50% opacity
 - copyright year updates itself

 Mobile 
  - main page
   - make it obvious there's more projects per section: use arrows?
   - have links to each sections to scroll page down to it

 <card class="project-details-container">
                        <div class="project-details project-details-title" >PROJECT</div>
                        <div class="project-details project-details-content" >{{ title }}</div>
                    </card>
                    <card class="project-details-container">
                        <div class="project-details project-details-title" >DATES</div>
                        <div class="project-details project-details-content" >{{ dates }}</div>
                    </card>                               
                    <card class="project-details-container">
                        <div class="project-details project-details-title" >COLLABORATOR</div>
                        <div class="project-details project-details-content" >{{ collaborator }}</div>
                    </card>                             
                    <card class="project-details-container">
                        <div class="project-details project-details-title" >CONTEXT</div>
                        <div class="project-details project-details-content" >{{ context }}</div>
                    </card>                             
                    <card class="project-details-container">
                        <div class="project-details project-details-title" >FUNDERS</div>
                        <div class="project-details project-details-content" > </div>
                    </card>