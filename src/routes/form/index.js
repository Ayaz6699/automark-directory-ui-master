/*eslint-disable no-undef*/
import React, { Component } from 'react';
import Footer from '../../components/footer/index';
import './style.css';
import  get  from 'lodash/get';
import CONST from '../../constants';
const Image = (props) => {
	return props.image ? <img alt={props.name} src={props.image} onClick={props.openCloudinary} style={{width: '200px', height: '200px'}} />: 
		<img alt="placeholder" data-src="holder.js/200x200" onClick={props.openCloudinary} 
		className="img-thumbnail" 
		style={{width: '200px', height: '200px'}}
		src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20200%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16161189152%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16161189152%22%3E%3Crect%20width%3D%22200%22%20height%3D%22200%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2273.96666717529297%22%20y%3D%22104.2%22%3E200x200%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true" />;
}

class FileUpload extends Component {
	state = {
		_state: null
	}
	linkFileState = (state_item, ctx) => {
		var file = ctx.target.files[0];
		var name = file.name;
		this.setState({
			_state: 'uploading',
			progress: '5%'
		});
		s3.upload({
			Key: 'cv/' + name,
			Body: file,
		}, (err, data) => {
			if (err) {
				return alert('There was an error uploading your photo: ', err.message);
			}
			this.setState({
				file_name: name,
				_state: 'done'
			})
			this.props.saveFileName(data.Location);
		}).on('httpUploadProgress', (evt) => {
			this.setState({
				_state: 'uploading',
				progress: (evt.loaded / evt.total * 100) + '%'
			});
		});
	}
	render(){
		const {_state} = this.state;
		return <div className="form-group">
		{_state === null ? <input className="form-control-file" type="file" id="customFile" onChange={this.linkFileState.bind(this, 'file')} /> : 
		<div className="progress">
			<div className="progress-bar" role="progressbar" style={{width: this.state.progress}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
		</div> }
		<label htmlFor="customFile">{this.state.file_name ? this.state.file_name : 'Choose your CV to upload'}</label>
	</div>;
	}
}
export default class Form extends Component {
	state = {
		"name": '',
    "phone_number": '',
    "email": '',
    "headline": '',
    "industry": '',
    "location": '',
    "picture": '',
    "current_job_company": '',
    "current_job_desc": '',
    "current_job_dept": '',
		"summary": '',
		"seconds": 59
	}
	async componentDidMount(){
		window.onLinkedIn = this.onLinkedIn;
		if (localStorage.getItem("success")){
			this.setState({"success": true});
			const id = localStorage.getItem("success");
			let r = await fetch(`${CONST.API}/profile/${id}`);
			r = await r.json();
			r = r.acf;
			this.setState(r);
		}
		setInterval((e) => this.setState({seconds: this.state.seconds - 1}), 1000);
	}
	openCloudinary = () => {
		cloudinary.openUploadWidget({ cloud_name: 'dwqo3od7a', upload_preset: 'r8rdgmtc'}, this.handleImageUpload);
		//this.handleImageUpload(null,null);
	}
	handleImageUpload = (err, result) => {
		if (!err){
			let image_url = result[0].thumbnail_url.replace('60','200').replace('90','200');
			
			this.setState({
				picture: image_url
			});
		}
	}
	onLinkedIn = () => {
		
		window.IN.Event.on(IN, "auth", this.getProfileData);
	}
	getProfileData = () => {
		window.IN.API.Raw("/people/~:(id,picture-urls::(original),email-address,headline,industry,location,formatted-name,positions,summary)").result(this.onSuccess).error(this.onError);
	}
	formSubmit = async(e) => {
		e.preventDefault();
		ga('send', 'event', 'Form', 'submit', 'Professional Form');
		this.setState({
			"saving": true
		})
		//try {
			let url;
			let body;
			//edit mode
			if (localStorage.getItem("success")){
				url = `${CONST.API}/profile/${this.state.id ? this.state.id : localStorage.getItem("success")}`;
				body = JSON.stringify({'fields' : this.state}); 
			}else{
				url = `${CONST.WP_API}/profile/`;
				body = JSON.stringify({'title' : this.state.name});
				//Create the profile
				const result = await fetch(url, {
					headers: new Headers({
						'Content-Type': 'application/json',
						'Authorization': 'Basic aWNlbWVsdDc6am9qbzMz'
					}),
					method: 'post',
					body
				});
				if (result.ok){
					const r = await result.json();
					this.setState({
						id: r.id
					});
					body = JSON.stringify({'fields' : this.state});
					url = `${CONST.API}/profile/${r.id}`;
				}else{
					this.setState({
						"error": JSON.stringify(e)
					});
					return;
				}
			}
			const result = await fetch(url, {
				headers: new Headers({
					'Content-Type': 'application/json',
					'Authorization': 'Basic aWNlbWVsdDc6am9qbzMz'
				}),
				//method: localStorage.getItem("success") ? 'put' : 'post',
				method: 'post',
				body
			});
			if (!result.ok){
				const error = await result.json();
				this.setState({
					"error": JSON.stringify(error.message)
				})
			}else{
				localStorage.setItem("success", ""+this.state.id);
				this.setState({
					"success": true
				});
				
			}
			this.setState({
				"saving": false
			});
			window.scrollTo(0,0);
		/*}catch(e){
			this.setState({
				"error": JSON.stringify(e)
			})
		}finally{
			this.setState({
				"saving": false
			});
			window.scrollTo(0,0);
		}*/
	}
	// Handle the successful return from the API call
	onSuccess = (data) => {
		const r = {
			"name": data.formattedName,
			"email": data.emailAddress,
			"headline": data.headline,
			"location": get(data,'location.name'),
			"picture": get(data,'pictureUrls.values[0]'),
			"industry": data.industry,
			"current_job_company": get(data,'positions.values[0].company.name'),
			"current_job_desc": get(data,'positions.values[0].title'),
			"summary": data.summary
		}
		this.setState(r);
	}

	// Handle an error response from the API call
	onError = (error) => {
			console.log(error);
	}

	editForm = (e) => {
		e.preventDefault();
		this.setState({
			showForm: true
		})
	}

	saveFileName = (name) => {
		this.setState({
			file_name: name
		})
	}
	render() {
		const progress = Math.round(Object.keys(this.state).map(e => this.state[e]).filter(a => a !== null && a !== "").length / Object.keys(this.state).length * 100);
		const linkState = (state_item , ctx) => {
			this.setState({[state_item]: ctx.target.value});
		}
		
		return (
			<div>
				<main role="main">
					<section className={`jumbotron brownbg`}>
						{this.state.success ? 
							<div>
								<h2 className="text-center text-success">
									Thank you for your details! Come back soon to see your profile.
								</h2>
								<h3 className="text-center">
									You can continue to <a href="/#/edit" onClick={this.editForm}>edit</a> your profile below
								</h3>
							</div>: null }
						{!this.state.success || this.state.showForm ? 
							<div className="container">
							<div className="green-box">
								Hurry! Make your profile now, to get good jobs!
							</div>
							<div className="red-box">New memberships close in: 23:40:{this.state.seconds}</div>
							<h1 className="jumbotron-heading text-center">
								Automark professional directory form, for job and promotion.
							</h1>
							<h4 className="h4message">
								Welcome, we are starting a new Job and Professional Website, please fill the form below with as much information as possible. Once our job website is done and new job postings will start coming you can apply to them.
							</h4>
							<h4 className="h4message">
								We will also be creating a list of best profiles every week and will feature you.
							</h4>
							<p className="lead text-center">
								Use LinkedIn button to save time
								<br />
								<script type="in/Login"></script>
							</p>
							{this.state.error ? 
								<p className="text-danger">{this.state.error}</p>	
							: null}
							{progress > 0 ? 
								<div className='form-progress'>
								<div className='progressval' style={{width: `${progress}%`}}>
									{progress}%
								</div>
							</div>
							: null}
							{!this.state.saving ? <form onSubmit={this.formSubmit}>
								<div className="form-group">
									<label>Email address</label>
									<input type="email" className="form-control" aria-describedby="emailHelp" 
										placeholder="Enter email ..."
										autoComplete="email"
										value={this.state.email}
										onChange={linkState.bind(this, 'email')} 
									/>
									<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
								</div>
								<div className="form-group">
									<label>Full name</label>
									<input type="text" className="form-control" 
										placeholder="Enter full name ..." autoComplete="name" 
										value={this.state.name}
										onChange={linkState.bind(this, 'name')} 
									/>
								</div>
								
								<div className="form-group">
									<label>Phone Number</label>
									<input type="tel" className="form-control" aria-describedby="emailHelp" 
										placeholder="Enter phone ..."
										autoComplete="phone"
										value={this.state.phone_number}
										onChange={linkState.bind(this, 'phone_number')} 
									/>
								</div>

								<div className="form-group">
									<label>Your city/town</label>
									<input type="text" className="form-control" aria-describedby="emailHelp" 
										placeholder="e.g. Hyderabad"
										value={this.state.location}
										onChange={linkState.bind(this, 'location')} 
									/>
								</div>

								<div className="form-group">
									<p>Profile Picture (Click to upload or change)</p>
									<Image openCloudinary={this.openCloudinary} name={this.state.name} image={this.state.picture} />
								</div>

								<div className="form-group">
									<label>One line about you</label>
									<input type="text" className="form-control" 
										placeholder="e.g. Automtive Engineer ..."
										value={this.state.headline}
										onChange={linkState.bind(this, 'headline')} 
									/>
								</div>

								<div className="form-group">
									<label>Your current company</label>
									<input type="text" className="form-control" 
										placeholder="Where do you work?"
										value={this.state.current_job_company}
										onChange={linkState.bind(this, 'current_job_company')} 
									/>
								</div>

								<div className="form-group">
									<label>Your current job title</label>
									<input type="text" className="form-control" 
										placeholder="e.g. Marketing Manager"
										value={this.state.current_job_desc}
										onChange={linkState.bind(this, 'current_job_desc')} 
									/>
								</div>

								<div className="form-group">
									<label>Your current department</label>
									<input type="text" className="form-control" 
										placeholder="e.g. Marketing"
										value={this.state.current_job_dept}
										onChange={linkState.bind(this, 'current_job_dept')} 
									/>
								</div>

								<div className="form-group">
									<label>Your industry</label>
									<input type="text" className="form-control" 
										placeholder="e.g. Engineering"
										value={this.state.industry}
										onChange={linkState.bind(this, 'industry')} 
									/>
								</div>

								<div className="form-group">
									<label>Any other information about you</label>
									<textarea type="text" className="form-control" 
										placeholder="e.g. Anything additional"
										value={this.state.summary}
										onChange={linkState.bind(this, 'summary')} 
									/>
								</div>

								<FileUpload saveFileName={this.saveFileName}/>

								<button type="submit" className="btn btn-lg btn-success">Save my profile</button>
							</form> : 'Saving'}
							
						</div>
						: null }
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
