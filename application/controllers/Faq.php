<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Faq extends CI_Controller {


	public function index()
	{ 	$data['active'] = "Mwoma & Associates Advocates";
        $data['title'] = "Frequently asked Questions about law and law firms";
		$this->load->view('default/partials/header2',$data);
        $this->load->view('default/partials/topmenu2');
		$this->load->view('default/files/faq');
		$this->load->view('default/partials/footer');
	}
}
