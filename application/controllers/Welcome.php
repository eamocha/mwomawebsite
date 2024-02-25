<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {


	public function index()
	{ 	$data['active'] = "home";
		$data['title'] = "Mwoma &amp; Associates &#8211;  Advocates";
        
		$this->load->view('default/partials/header',$data);
        $this->load->view('default/partials/topmenu');
		$this->load->view('default/files/index');
  
		$this->load->view('default/partials/footer');
	}
}
