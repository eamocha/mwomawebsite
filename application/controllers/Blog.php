<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Blog extends CI_Controller {

	public function index()
	{ 	$data['active'] = "Mwoma & Associates Advocates";
        $data['title'] = "Blogs";
		$this->load->view('default/partials/header2',$data);
        $this->load->view('default/partials/topmenu2');
		$this->load->view('default/files/blog');
  
		$this->load->view('default/partials/footer');
	}
}
