const CMS = require('decap-cms');
const PagePreview = require('./preview-templates/PagePreview.js');

CMS.registerPreviewTemplate('projects', PagePreview);
