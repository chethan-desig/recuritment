import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Button, Modal, Container, Row, Col, Form } from 'react-bootstrap';

const AssignPanel = props => {
    const [level,setLevel1] = useState('');
    const [panel, setPanel] = useState('');
    const [AssignedDAte, setAssigneddate] = useState("");
    const [duedate, setDuedate] = useState('');
    const [comments, setComments] = useState('');
    const [closeddate, setClosedDate] = useState('');
    const [status, setStatus] = useState('');
    const [Feedbackattach, setFeedbackAttach] = useState('');
    const [level2, setLevel2] = useState('');
    const [level2panel, setLevel2panel] = useState('');
    const [level2assigneddate,setLevel2assignedpanel]=useState('')
    const [level2duedate,setLevel2duedate] = useState('')
    const [level2comments,setLevel2comments] = useState('')
    const [level2closeddate,setLevel2closeddate] = useState('')
    const [level2status,setLevel2status] = useState('')
    const [level2feedbackattach,setLevel2feedbackattach] = useState('')
    const [level3,setLevel3] = useState('')
    const [level3panel,setLevel3panel] = useState('')
    const [level3assigneddate,setLevel3assigneddate] = useState('')
    const [level3duedate,setLevel3duedate] = useState('')
    const [level3comments,setLevel3comments] = useState('')
    const [level3closeddate,setLevel3closeddate] = useState('')
    const [level3status,setLevel3status] = useState('')
    const [level3feedbackattach,setLevel3feedbackattach] = useState('')
    const [hrrequired,setHrrequired] = useState('')
    const [hrrequiredrpanel,setHrrequiredpanel] = useState('')
    const [hrrequiredassigneddate,setHrrequiredassigneddate] = useState('')
    const [hrrequiredduedate,setHrrequiredduedate] = useState('')
    const [hrrequiredcomments,setHrrequiredcomments] = useState('')
    const [hrrequierdcloseddate,setHrrequiredcloseddate] = useState('')
    const [hrrequiredstatus,setHrrequiredstatus] = useState('')
    const [hrrequiredfeedbackattach,setHrrequiredfeedbackattach] = useState('')
    const [formserror,setFormserror] = useState({})
    const errors = {}

    const dispatch = useDispatch()
const handleChange =(e)=>{

    if (e.target.id === "yes") {
        setLevel1(e.target.value);
      }
      if (e.target.id === "project") {
        setLevel1(e.target.value);
      }
      if(e.target.name==='panel') {
          setPanel(e.target.value)
      }
      if(e.target.name==='assigneddate'){
          setAssigneddate(e.target.value)
      }
      if(e.target.name==='duedate'){
          setDuedate(e.target.value)
      }
      if(e.target.name==='comments'){
          setComments(e.target.value)
      }
      if(e.target.name==='closeddate'){
          setClosedDate(e.target.value)
      }
      if(e.target.name==='status'){
          setStatus(e.target.value)
      }
      if(e.target.name==='feedbackattach'){
          setFeedbackAttach(e.target.value)
      }
      if(e.target.id==='level2yes'){
          setLevel2(e.target.value)
      }
      if(e.target.id==='level2no'){
          setLevel2(e.target.value)
      }
      if(e.target.name==='level2panel'){
          setLevel2panel(e.target.value)
      }
      if(e.target.name==='level2assigneddate'){
          setLevel2assignedpanel(e.target.value)
      }
      if(e.target.name==='level2duedate'){
          setLevel2duedate(e.target.value)
      }
      if(e.target.name==='level2comments'){
          setLevel2comments(e.target.value)
      }
      if(e.target.name==='level2closeddate'){
          setLevel2closeddate(e.target.value)
      }
      if(e.target.name==='level2status'){
          setLevel2status(e.target.value)
      }
      if(e.target.name==='level2feedbackattach'){
          setLevel2feedbackattach(e.target.value)
      }
      if(e.target.id==='clientrequireyes'){
          setLevel3(e.target.value)
      }
      if(e.target.id==='clientrequireno'){
          setLevel3(e.target.value)
      }
      if(e.target.name==='level3panel'){
          setLevel3panel(e.target.value)
      }
      if(e.target.name==='level3assigneddate'){
          setLevel3assigneddate(e.target.value)
      }
      if(e.target.name==='level3duedate'){
          setLevel3duedate(e.target.value)
      }
      if(e.target.name==='level3comments'){
          setLevel3comments(e.target.value)
      }
      if(e.target.name==='level3closeddate'){
          setLevel3closeddate(e.target.value)
      }
      if(e.target.name==='level3status'){
          setLevel3status(e.target.value)
      }
      if(e.target.name==='level3feedbackattach'){
          setLevel3feedbackattach(e.target.value)
      }
      if(e.target.id==='hrrequireyes'){
          setHrrequired(e.target.value)
      }
      if(e.target.id==='hrrequireno'){
          setHrrequired(e.target.value)
      }
      if(e.target.name==='hrrequiredpanel'){
          setHrrequiredpanel(e.target.value)
      }
      if(e.target.name==='hrrequiredassigneddate'){
          setHrrequiredassigneddate(e.target.value)
      }
      if(e.target.name==='hrrequiredduedate'){
          setHrrequiredduedate(e.target.value)
      }
      if(e.target.name==='hrrequiredcomments'){
          setHrrequiredcomments(e.target.value)
      }
    if(e.target.name==='hrrequirecloseddate'){
        setHrrequiredcloseddate(e.target.value)
    }
    if(e.target.name==='hrrequirestatus'){
        setHrrequiredstatus(e.target.value)
    }
    if(e.target.name==='hrrequirefeedbackattach'){
        setHrrequiredfeedbackattach(e.target.value)
    }
   
}

// useEffect(()=>{
//     const runvalidation = () =>{
//         if(level.length===0){
//             errors.level = 'select the level'
//         }
//         if(panel.trim().length===0){
//             errors.panel= 'fill the panel'
//         }
//         if(AssignedDAte.trim().length===0){
//             errors.AssignedDAte='select the assigned date'
//         }
//         if(duedate.trim().length===0){
//             errors.duedate = 'select the duedate'
//         }
//         if(comments.trim().length===0){
//             errors.comments='fill the comments'
//         }
//         if(closeddate.trim().length===0){
//             errors.closeddate = 'select the closed date'
//         }
//         if(status.trim().length===0){
//             errors.status = 'fill the status'
//         }
//         if(Feedbackattach.trim().length===0){
//             errors.Feedbackattach='fill the feedbackattach'
//         }
//         if(level2.length === 0){
//             errors.level2 = 'select the level2'
//         }
//         if(level2panel === 0){
//             errors.level2panel = 'fill the panel'
//         }
//         if(level2assigneddate === 0 ){
//             errors.level2assigneddate = 'select the assigneddate'
//         }
//         if(level2duedate.trim().length === 0){
//             errors.level2duedate ='select the duedate'
//         }
//         if(level2comments.trim().length === 0){
//             errors.level2comments = 'fill the comments'
//         }
//         if(level2closeddate.length === 0 ){
//             errors.level2closeddate='fill the closeddate'
//         }
//         if(level2status.trim().length === 0){
//             errors.level2status = 'select the status'
//         }
//         if(level2feedbackattach.trim().length === 0){
//             errors.level2feedbackattach = 'fill the feedbackattach'
//         }
//         if(level3.length ===0){
//             errors.level3 = 'select the client required'
//         }
//         if(level3panel.length === 0){
//             errors.level3panel = 'select the panel'
//         }
//         if(level3assigneddate.length === 0){
//             errors.level3assigneddate = 'select the assigneddate'
//         }
//         if(level3duedate.length === 0 ){
//             errors.level3duedate = 'select the duedate'
//         }
//         if(level3comments.length === 0){
//             errors.level3comments = 'select the comments'
//         }
//         if(level3closeddate.length === 0){
//             errors.level3closeddate = 'select the closeddate'
//         }
//         if(level3status.length === 0){
//             errors.level3status === 'fill the status'
//         }
//         if(level3feedbackattach.length === 0){
//             errors.level3feedbackattach = 'select the feedbackattach'
//         }
//         if(hrrequired.length === 0){
//             errors.hrrequired = 'select the hrrequired'
//         }
//         if(hrrequiredrpanel.lenth === 0){
//             errors.hrrequiredrpanel = 'fill the panel'
//         }
//         if(hrrequiredassigneddate.length === 0){
//             errors.hrrequiredassigneddate = 'select the assigned date'
//         }
//         if(hrrequiredduedate.length === 0){
//             errors.hrrequiredduedate = 'select the duedate'
//         }
//         if(hrrequiredcomments.length === 0){
//             errors.hrrequiredcomments = 'fill the comments'
//         }
//         if(hrrequierdcloseddate.length === 0){
//             errors.hrrequirecloseddate = 'select the closed date'
//         }
//         if(hrrequiredstatus.length === 0){
//             errors.hrrequiredstatus = 'fill the status'
//         }
//         if(hrrequiredfeedbackattach.length === 0){
//             errors.hrrequiredfeedbackattach = 'fill the feedbackattach'
//         }
//     }
// },[])
// const runvalidation = () =>{
//     if(level.length===0){
//         errors.level = 'select the level'
//     }
//     if(panel.trim().length===0){
//         errors.panel= 'fill the panel'
//     }
//     if(AssignedDAte.trim().length===0){
//         errors.AssignedDAte='select the assigned date'
//     }
//     if(duedate.trim().length===0){
//         errors.duedate = 'select the duedate'
//     }
//     if(comments.trim().length===0){
//         errors.comments='fill the comments'
//     }
//     if(closeddate.trim().length===0){
//         errors.closeddate = 'select the closed date'
//     }
//     if(status.trim().length===0){
//         errors.status = 'fill the status'
//     }
//     if(Feedbackattach.trim().length===0){
//         errors.Feedbackattach='fill the feedbackattach'
//     }
//     if(level2.length === 0){
//         errors.level2 = 'select the level2'
//     }
//     if(level2panel === 0){
//         errors.level2panel = 'fill the panel'
//     }
//     if(level2assigneddate === 0 ){
//         errors.level2assigneddate = 'select the assigneddate'
//     }
//     if(level2duedate.trim().length === 0){
//         errors.level2duedate ='select the duedate'
//     }
//     if(level2comments.trim().length === 0){
//         errors.level2comments = 'fill the comments'
//     }
//     if(level2closeddate.length === 0 ){
//         errors.level2closeddate='fill the closeddate'
//     }
//     if(level2status.trim().length === 0){
//         errors.level2status = 'select the status'
//     }
//     if(level2feedbackattach.trim().length === 0){
//         errors.level2feedbackattach = 'fill the feedbackattach'
//     }
//     if(level3.length ===0){
//         errors.level3 = 'select the client required'
//     }
//     if(level3panel.length === 0){
//         errors.level3panel = 'select the panel'
//     }
//     if(level3assigneddate.length === 0){
//         errors.level3assigneddate = 'select the assigneddate'
//     }
//     if(level3duedate.length === 0 ){
//         errors.level3duedate = 'select the duedate'
//     }
//     if(level3comments.length === 0){
//         errors.level3comments = 'select the comments'
//     }
//     if(level3closeddate.length === 0){
//         errors.level3closeddate = 'select the closeddate'
//     }
//     if(level3status.length === 0){
//         errors.level3status === 'fill the status'
//     }
//     if(level3feedbackattach.length === 0){
//         errors.level3feedbackattach = 'select the feedbackattach'
//     }
//     if(hrrequired.length === 0){
//         errors.hrrequired = 'select the hrrequired'
//     }
//     if(hrrequiredrpanel.lenth === 0){
//         errors.hrrequiredrpanel = 'fill the panel'
//     }
//     if(hrrequiredassigneddate.length === 0){
//         errors.hrrequiredassigneddate = 'select the assigned date'
//     }
//     if(hrrequiredduedate.length === 0){
//         errors.hrrequiredduedate = 'select the duedate'
//     }
//     if(hrrequiredcomments.length === 0){
//         errors.hrrequiredcomments = 'fill the comments'
//     }
//     if(hrrequierdcloseddate.length === 0){
//         errors.hrrequirecloseddate = 'select the closed date'
//     }
//     if(hrrequiredstatus.length === 0){
//         errors.hrrequiredstatus = 'fill the status'
//     }
//     if(hrrequiredfeedbackattach.length === 0){
//         errors.hrrequiredfeedbackattach = 'fill the feedbackattach'
//     }
// }

const handleSave = (e) =>{
    e.preventDefault()
    // runvalidation()
//    if(Object.keys(errors).length === 0){
//        setFormserror({})
       const formdata = {
        level1 : level,
        panel : panel,
        AssignedDate : AssignedDAte,
        DueDate : duedate,
        Comments : comments,
        ClosedDate : closeddate,
        status : status,
        FeedbackAttach : Feedbackattach,
        level2 : level2,
        level2panel : level2panel,
        level2AssignedDate : level2assigneddate,
        level2DueDate : level2duedate,
        level2Comments : level2comments,
        level2ClosedDate : level2closeddate,
        level2status : level2status,
        level2FeedbackAttach : level2feedbackattach,
        level3 : level3,
        level3panel : level3panel,
        level3AssignedDate : level3assigneddate,
        level3DueDate : level3duedate,
        level3Comments : level3comments,
        level3ClosedDate : level3closeddate,
        level3status : level3status,
        level3FeedbackAttach : level3feedbackattach,
        HrRequired : hrrequired,
        HrRequiredpanel : hrrequiredrpanel,
        HrRequiredAssignedDate : hrrequiredassigneddate,
        HrRequiredDueDate : hrrequiredduedate,
        HrRequiredComments : hrrequiredcomments,
        HrRequiredClosedDate : hrrequierdcloseddate,
        HrRequiredstatus : hrrequiredstatus,
        HrRequiredFeedbackAttach : hrrequiredfeedbackattach
    }
    const redirect = () => {
       
        window.location.reload();
      };
    

//    }else {
//        setFormserror(errors)
//    }
     
       
}

    return (
        <Modal {...props} aria-labelledby='contained-modal-title-vcenter' size='xl'>
            <Modal.Header closeButton className='bg-primary'>
                <Modal.Title id='contained-modal-title-vcenter' className='text-light' style={{ fontSize: '17px' }}>
                    Assign Panel
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='show-grid'>
                <Container>
                    <Row>
                        <Col xs={12} md={6} className='mb-3'>
                            <Container className='mb-3'>
                                <Row className='me-5'>
                                    <Col>Level 1</Col>
                                    {formserror.positiontype && (
                      <span>-{formserror.positiontype}</span>
                    )}
                                    <Col>
                                        <Form.Group as={Col}>
                                            <Form.Check
                                                  inline
                                                  type='radio'
                                                  label='yes'
                                                  value='yes'
                                                  name='level1'
                                                  id='yes'
                                                  onChange={handleChange}
                                            />
                                            <Form.Check
                                                 inline
                                                 type='radio'
                                                 label='no'
                                                 value='no'
                                                 name='level1'
                                                 id='yes'
                                                 onChange={handleChange}

                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
                            <div className='border border-2 rounded p-4'>
                                <Form>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}
                                          
                                        >
                                            Panel
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type Here' size='sm'   value={panel}
                                            name='panel'
                                            onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Assigned Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type here' size='sm'  value={AssignedDAte}
                                            name='assigneddate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Due Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type Here' size='sm'   value={duedate}
                                            name='duedate'
                                            onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Comments
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control as='textarea' rows={2} placeholder='Type here' size='sm'   value={comments}
                                            name='comments'
                                            onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Closed Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type here' size='sm'   value={closeddate}
                                            name='closeddate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Status
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type here' size='sm'   value={status}
                                            name='status'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Feedback Attach
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type here' size='sm'   value={Feedbackattach}
                                            name='feedbackattach'
                                            onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='mb-3'>
                            <Container className='mb-3'>
                                <Row className='me-5'>
                                    <Col>Level 2</Col>
                                    <Col>
                                        <Form.Group as={Col}>
                                            <Form.Check
                                                inline
                                                type='radio'
                                                label='yes'
                                                value='yes'
                                                name='level2'
                                                id='level2yes'
                                                onChange={handleChange}
                                            />
                                            <Form.Check
                                                inline
                                                type='radio'
                                                label='no'
                                                value='no'
                                                name='level2'
                                                id='level2no'
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
                            <div className='border border-2 rounded p-4'>
                                <Form>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Panel
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type Here' size='sm'  value={level2panel}
                                            name='level2panel'
                                            onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Assigned Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type here' size='sm'  value={level2assigneddate}
                                            name='level2assigneddate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Due Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type Here' size='sm'  value={level2duedate}
                                            name='level2duedate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Comments
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control as='textarea' rows={2} placeholder='Type here' size='sm'  value={level2comments}
                                            name='level2comments'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Closed Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type here' size='sm'  value={level2closeddate}
                                            name='level2closeddate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Status
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type here' size='sm'  value={level2status}
                                            name='level2status'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Feedback Attach
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type here' size='sm'  value={level2feedbackattach}
                                            name='level2feedbackattach'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='mb-3'>
                            <Container className='mb-3'>
                                <Row className='me-5'>
                                    <Col>Client Required</Col>
                                    <Col>
                                        <Form.Group as={Col}>
                                            <Form.Check
                                                 inline
                                                 type='radio'
                                                 label='yes'
                                                 value='yes'
                                                 name='clientrequire'
                                                 id='clientrequireyes'
                                                 onChange={handleChange}
                                            />
                                            <Form.Check
                                                   inline
                                                   type='radio'
                                                   label='no'
                                                   value='yes'
                                                   name='clientrequire'
                                                   id='clientrequireno'
                                                   onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
                            <div className='border border-2 rounded p-4'>
                                <Form>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Panel
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type Here' size='sm'  value={level3panel}
                                            name='level3panel'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Assigned Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type here' size='sm'  value={level3assigneddate}
                                            name='level3assigneddate'
                                            onChange={handleChange} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Due Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type Here' size='sm'  value={level3duedate}
                                            name='level3duedate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Comments
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control as='textarea' rows={2} placeholder='Type here' size='sm'  value={level3comments}
                                            name='level3comments'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Closed Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type here' size='sm'  value={level3closeddate}
                                            name='level3closeddate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Status
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type here' size='sm'  value={level3status}
                                            name='level3status'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Feedback Attach
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type here' size='sm'  value={level3feedbackattach}
                                            name='level3feedbackattach'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className='mb-3'>
                            <Container className='mb-3'>
                                <Row className='me-5'>
                                    <Col>HR Required</Col>
                                    <Col>
                                        <Form.Group as={Col}>
                                            <Form.Check
                                                   inline
                                                   type='radio'
                                                   label='yes'
                                                   value='yes'
                                                   name='hrrequire'
                                                   id='hrrequireyes'
                                                   onChange={handleChange}
                                            />
                                            <Form.Check
                                                  inline
                                                  type='radio'
                                                  label='no'
                                                  value='yes'
                                                  name='hrrequire'
                                                  id='hrrequireno'
                                                  onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
                            <div className='border border-2 rounded p-4'>
                                <Form>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Panel
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type Here' size='sm'  value={hrrequiredrpanel}
                                            name='hrrequiredpanel'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Assigned Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type here' size='sm'  value={hrrequiredassigneddate}
                                            name='hrrequiredassigneddate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Due Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type Here' size='sm'  value={hrrequiredduedate}
                                            name='hrrequiredduedate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Comments
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control as='textarea' rows={2} placeholder='Type here' size='sm'  value={hrrequiredcomments}
                                            name='hrrequiredcomments'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Closed Date
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='date' placeholder='Type here' size='sm'  value={setHrrequiredcloseddate}
                                            name='hrrequirecloseddate'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className='mb-2'>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Status
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type here' size='sm'  value={hrrequiredstatus}
                                            name='hrrequirestatus'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column sm='4' className='me-5' style={{ fontSize: '14px' }}>
                                            Feedback Attach
                                        </Form.Label>
                                        <Col sm='6'>
                                            <Form.Control type='text' placeholder='Type here' size='sm'  value={hrrequiredfeedbackattach}
                                            name='hrrequirefeedbackattach'
                                            onChange={handleChange}/>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className='btn btn-outline-dark bg-light'>
                    cancel
                </Button>
                <Button onClick={handleSave}>Assign</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AssignPanel;
