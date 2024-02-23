<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Practice extends CI_Controller {


	public function index()
	{ 		$data['active'] = "Mwoma & Associates Advocates";
        
		$this->load->view('default/partials/header2',$data);
        $this->load->view('default/partials/topmenu2');
		$this->load->view('default/files/practice-areas');
  
		$this->load->view('default/partials/footer');
		
	}
}
