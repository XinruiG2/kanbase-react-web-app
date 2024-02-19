import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AssignmentEdit = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const lastSlashIndex = pathname.lastIndexOf('/');
    const upToLastSlash = pathname.substring(0, lastSlashIndex);

  return (
    <div>
        <div>
            <select>
                <option selected value="SPEEDGRADER">SpeedGrader</option>
            </select>
        </div> <hr />
        <h3>
            Assignment Name
        </h3>
        <form id="create-assignment">
            <input type="text" value="A1 - ENV + HTML" placeholder="Assignemnt name"/><br/><br/>
            <textarea cols={20} rows={2}
                placeholder="Assignment description"
                title="description">This is the assignment description.
            </textarea><br/><br/>
            <label>Points</label><br/>
            <input type="number" placeholder="points" value="100"/><br/><br/>
            <label>Assignment Group</label><br/>
            <select>
                <option>ASSIGNMENTS</option>
            </select><br/><br/>
            <label>Display Grade as</label><br/>
            <select>
                <option>Percentage</option>
            </select><br/><br/>
            <label>Submission Type</label><br/>
            <select>
                <option>Online</option>
            </select><br/><br/>

            <label>Online Entry Options</label><br/>
            <label>
                Text Entry
                <input type="checkbox" value="TEXT-ENTRY"
                name="entry-option" id="chkbox-text-entry"/>
            </label><br/>

            <label>
                Website URL
                <input type="checkbox" value="WEBSITE-URL"
                name="entry-option" id="chkbox-website-url"/>
            </label><br/>

            <label>
                Media Recordings
                <input type="checkbox" value="MEDIA-RECORDINGS"
                name="entry-option" id="chkbox-media-recording"/>
            </label><br/>

            <label>
                Student Annotation
                <input type="checkbox" value="STUDENT-ANNOTATION"
                name="entry-option" id="chkbox-student-annotation"/>
            </label><br/>

            <label>
                File Uploads
                <input type="checkbox" value="FILE-UPLOADS"
                name="entry-option" id="chkbox-file-uploads"/>
            </label><br/><br/>

            <label>Assign</label><br/>
            <label>Assign to</label><br/>
            <input type="text" value="Everyone"/><br/><br/>

            <label>Due</label><br/>
            <input type="date" value="2021-01-01"/><br/><br/>

            <label>Available from</label><br/>
            <input type="date" value="2021-01-01"/><br/><br/>

            <label>Until</label><br/>
            <input type="date" value="2021-01-01"/><br/><br/>

            <button type="button"><Link to={upToLastSlash}>Cancel</Link></button>
            <button type="button"><Link to={upToLastSlash}>Save</Link></button>
        </form>
    </div>
  )
}

export default AssignmentEdit