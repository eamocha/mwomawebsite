<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class My404 extends CI_Controller {


   public function index()

   {

      $this->output->set_status_header('404');

       $data['active'] = "Mwoma & Associates Advocates";
       $data['title'] = "Mwoma &amp; Associates &#8211;  Advocates -Error occured";
       $this->load->view('default/partials/header2',$data);
       $this->load->view('default/partials/topmenu2');
       $this->load->view('default/files/404');
 
       $this->load->view('default/partials/footer');
       }

}