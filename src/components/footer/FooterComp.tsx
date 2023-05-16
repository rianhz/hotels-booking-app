import { Button, Col, Form, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import {
	AiFillGithub,
	AiFillLinkedin,
	AiFillInstagram,
	AiOutlineWhatsApp,
	AiOutlineMail,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import "./footer.css";
import { ReactComponent as Logo } from "../../images/logoipsum-243.svg";
import React, { useRef, useState } from "react";
import { useAppSelector } from "../../app/hooks";

const FooterComp = () => {
	const formRef: React.MutableRefObject<undefined | any> = useRef();
	const mode = useAppSelector((state) => state.booked.mode);

	const [formDatas, setFormDatas] = useState({
		userNama: "",
		userEmail: "",
		userPesan: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormDatas(() => ({
			...formDatas,
			[e.target.name]: e.target.value,
		}));
	};

	const sendEmails = () => {
		emailjs
			.sendForm(
				`${process.env.REACT_APP_SERVICE}`,
				`${process.env.REACT_APP_TEMPLATE}`,
				formRef.current,
				`${process.env.REACT_APP_TEMPLATE_KEY}`
			)
			.then(
				(result) => {
					console.log(result.text);
					formRef.current.reset();
					setFormDatas((prev) => ({
						...prev,
						userEmail: "",
						userPesan: "",
						userNama: "",
					}));

					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	const validateForms = () => {
		let regex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (
			formDatas.userNama === "" ||
			formDatas.userEmail === "" ||
			formDatas.userPesan === ""
		) {
			toast.error("All fields required!");
			return;
		} else if (formDatas.userEmail !== "" && !regex.test(formDatas.userEmail)) {
			toast.error("Email is not valid");
			return;
		} else {
			sendEmails();
			toast.success("Email sent!");
			return;
		}
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		validateForms();
	};

	return (
		<Row
			style={{
				marginTop: "50px",
				backgroundColor: mode ? "#212529" : "rgb(230, 228, 228)",
				color: mode ? "white" : "black",
			}}
		>
			<Col lg={12}>
				<Logo className="logos" />
			</Col>
			<Row className="mt-4">
				<Col lg={6} md={12} sm={12} className="form-wrapper">
					<Toaster />

					<Form className="w-75" ref={formRef} onSubmit={handleSubmit}>
						<Form.Group className="mb-2">
							<Form.Control
								placeholder="Name"
								name="userNama"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group className="mb-2">
							<Form.Control
								placeholder="Email"
								name="userEmail"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group className="mb-4">
							<Form.Control
								as="textarea"
								rows={4}
								name="userPesan"
								placeholder="Message..."
								onChange={handleChange}
							/>
						</Form.Group>

						<Button type="submit" className="w-100 text-uppercase">
							Send
						</Button>
					</Form>
				</Col>
				<Col lg={3} md={6} sm={6} className="footers-item">
					<h6 className="text-uppercase fw-bold mt-3 mb-4 ">Tech</h6>
					<p>React</p>
					<p>TypeScript</p>
					<p>REST</p>
					<p>Bootstrap</p>
				</Col>
				<Col lg={3} md={6} sm={6} className="footers-item">
					<h6 className="text-uppercase fw-bold mt-3 mb-4">Contact's</h6>
					<p>
						<AiOutlineWhatsApp />
						<span className="ms-2">(62+) 878 504 78426</span>
					</p>
					<p>
						<AiOutlineMail />
						<span className="ms-2">ryanhidayat.rh197@gmail.com</span>
					</p>
					<p>
						<FiMapPin />
						<span className="ms-2">Jatimulyo, Malang</span>
					</p>
					<div className="mt-3">
						<a
							className="a-link"
							href="https://github.com/rianhz"
							style={{
								color: mode ? "white" : "black",
							}}
						>
							<AiFillGithub style={{ fontSize: "30px" }} />
						</a>
						<a
							className="a-link"
							href="https://www.instagram.com/rianhiday_/"
							style={{
								color: mode ? "white" : "black",
							}}
						>
							<AiFillInstagram style={{ fontSize: "30px" }} />
						</a>
						<a
							className="a-link"
							href="https://www.linkedin.com/in/rian-hidayat-275a46226"
							style={{
								color: mode ? "white" : "black",
							}}
						>
							<AiFillLinkedin style={{ fontSize: "30px" }} />
						</a>
					</div>
				</Col>
			</Row>

			<Row>
				<Col className="d-flex justify-content-center align-items-center p-4 foot mt-5">
					© 2021 Copyright :
					<a href="https://rianhz-github-io.vercel.app/">Rian Hidayat</a>
				</Col>
			</Row>
		</Row>
	);
};

export default FooterComp;
