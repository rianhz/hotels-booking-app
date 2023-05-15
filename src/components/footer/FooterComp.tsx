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

const FooterComp = () => {
	const formRef: React.MutableRefObject<undefined | any> = useRef();

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
				"service_m6bzei9",
				"template_oq1osn8",
				formRef.current,
				"FxZ92SUt8TQ7cCvQa"
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
		<Row>
			<Col lg={12} className="px-5">
				<Logo />
			</Col>

			<Row className="mt-4">
				<Col
					lg={6}
					md={12}
					sm={12}
					className="d-flex justify-content-center align-items-center flex-column "
				>
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
				<Col lg={3} md={6} sm={6} className="mt-4">
					<h6 className="text-uppercase fw-bold mt-3 mb-4 ">Tech</h6>
					<p>React</p>
					<p>TypeScript</p>
					<p>REST</p>
					<p>Bootstrap</p>
				</Col>
				<Col lg={3} md={6} sm={6} className="mt-4">
					<div>
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
					</div>
					<div className="d-flex justify-content-start w-100 align-items-center ms-4">
						<a className="a-link" href="https://github.com/rianhz">
							<AiFillGithub style={{ fontSize: "30px" }} />
						</a>
						<a className="a-link" href="https://www.instagram.com/rianhiday_/">
							<AiFillInstagram style={{ fontSize: "30px" }} />
						</a>
						<a
							className="a-link"
							href="https://www.linkedin.com/in/rian-hidayat-275a46226"
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
