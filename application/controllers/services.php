<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Services extends CI_Controller {


	public function index()
	{ 	$data['active'] = "Services";
        $data['title'] = "Our services";
		$this->load->view('default/partials/header2',$data);
        $this->load->view('default/partials/topmenu2');
		$this->load->view('default/files/our-services');
  
		$this->load->view('default/partials/footer');
	}
}
