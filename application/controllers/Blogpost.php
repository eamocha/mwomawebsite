<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blogpost extends CI_Controller {


	public function index()
	{ 	$data['active'] = "home";
		$this->load->view('default/partials/header',$data);
		$this->load->view('default/files/blog-post');
		$this->load->view('default/partials/footer');
	}
}
