import mensaje from "./imagenes/mensaje.jpg";
import "./Css/Css.css";
import "./Css/Contacto.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function Contacto() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    Swal.fire({
      title: "mensaje enviado",

      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/Inicio");
      }
    });
  }
  return (
    <div ClassName="splitRightContainer">
      <section className="ftco-section img bg-hero h-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section contactanos">
                Contacta con Nosotros!
              </h2>
            </div>
          </div>
          <div className=" form-group ">
            <div className="col-lg-11">
              <div className="wrapper">
                <div className=" row no-gutters justify-content-between">
                  <div className=" col-lg-6 d-flex align-items-stretch">
                    <div className="text-light info-wrap w-100 p-5">
                      <h3 className="mb-4">Encuentranos</h3>

                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>

                        <div className="text pl-4">
                          <p>
                            <span className="info-wrapp">Address:</span>
                            Av. de la Aurora, 25, Centro Comercial Larios
                            Centro, 29002, Malaga
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-4">
                          <p>
                            <span className="info-wrapp">Phone:</span>{" "}
                            <a href="tel://1234567920">+ 661515291</a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-4">
                          <p>
                            <span className="info-wrapp">Email:</span>{" "}
                            <a href="mailto:info@trafficker1.com">
                              Trafficker1@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-4">
                          <p>
                            <span className="info-wrapp">Website</span>{" "}
                            <a href="#">trafficker1.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-lg-5">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Cuentanos...</h3>
                      <div id="form-message-warning" className="mb-4"></div>

                      <div className=" form-group ">
                        <div className="fs-row sel req">
                          <span>
                            <select
                              className="form-select text-secondary "
                              id="subject"
                              name="subject"
                              title="Subject"
                              required=""
                            >
                              <option className="">Asunto</option>
                              <option data-topic="topic_information_on_our_stores">
                                Información sobre nuestras tiendas
                              </option>
                              <option data-topic="topic_i_want_to_check_stock_online">
                                Comprobar stock online
                              </option>
                              <option data-topic="topic_i_want_to_check_stock_in_stores">
                                Comprobar stock en tiendas
                              </option>
                              <option data-topic="topic_where_is_my_order_">
                                ¿Dónde está mi pedido?
                              </option>
                              <option data-topic="topic_i_have_a_problem_with_my_delivery">
                                Tengo un problema con mi pedido
                              </option>
                              <option data-topic="topic_can_i_change_my_delivery_address_">
                                ¿Puedo cambiar mi dirección de envío?
                              </option>
                              <option data-topic="topic_can_i_change_or_cancel_my_order_">
                                ¿Puedo cambiar o cancelar mi pedido?
                              </option>
                              <option data-topic="topic_why_has_my_order_been_cancelled_">
                                ¿Por qué se ha cancelado mi pedido?
                              </option>
                              <option data-topic="topic_i_have_a_question_SobreNosotros_payments">
                                Tengo una pregunta sobre pagos
                              </option>
                              <option data-topic="topic_what_delivery_options_do_you_offer_and_how_much_does_it_cost_">
                                ¿Qué opciones de envío ofrecéis y cuánto
                                cuentan?
                              </option>
                              <option data-topic="topic_do_you_ship_to_my_country_">
                                ¿Enviáis a mi país?
                              </option>
                              <option data-topic="topic_how_can_i_return_my_order_">
                                ¿Cómo devuelvo un pedido?
                              </option>
                              <option data-topic="topic_how_do_i_return_something_i_bought_in_store_">
                                ¿Cómo devuelvo un artículo que compré en tienda?
                              </option>
                              <option data-topic="topic_something_is_missing_from_my_order">
                                Hay algo que falta en mi pedido
                              </option>
                              <option data-topic="topic_i_ve_received_the_wrong_item">
                                He recibido un producto equivocado
                              </option>
                              <option data-topic="topic_how_long_will_it_take_for_you_to_process_my_refund_">
                                ¿Cuánto tiempo tardará en efectuarse mi
                                reembolso?
                              </option>
                              <option data-topic="topic_i_ve_forgotten_my_password">
                                He olvidado mi contraseña
                              </option>
                              <option data-topic="topic_i_m_having_problems_on_your_website">
                                Estoy teniendo problemas en vuestra página web
                              </option>
                              <option data-topic="topic_how_do_i_leave_feedback_SobreNosotros_your_online_service_">
                                ¿Cómo puedo enviar una opinión sobre el servicio
                                online?
                              </option>
                              <option data-topic="topic_how_do_i_leave_feedback_SobreNosotros_one_of_your_stores_">
                                ¿Cómo puedo enviar una opinión sobre una de
                                vuestras tiendas?
                              </option>
                              <option data-topic="topic_how_do_i_unsubscribe_from_your_marketing_emails_">
                                ¿Cómo puedo darme de baja de vuestros e-mails?
                              </option>
                              <option data-topic="topic_how_do_i_use_my_promotion_code_">
                                ¿Cómo canjeo un código promocional?
                              </option>
                              <option data-topic="topic_i_have_a_question_SobreNosotros_giftcards">
                                Tengo una pregunta sobre las tarjetas regalo
                              </option>
                              <option data-topic="topic_do_you_have_any_job_vacancies_">
                                ¿Tenéis alguna oferta de trabajo disponible?
                              </option>
                              <option data-topic="topic_how_do_i_contact_your_head_office_for_pr___marketing_opportunities_">
                                ¿Cómo puedo contactar con vuestras oficinas
                                centrales para oportunidades de RRPP y
                                marketing?
                              </option>
                              <option data-topic="topic_how_do_i_contact_your_head_office_for_pr___marketing_opportunities_">
                                Otros
                              </option>
                            </select>
                          </span>
                        </div>
                      </div>
                      <form
                        id="contactForm"
                        onSubmit={handleSubmit}
                        name="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="5"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                        <button>Enviar </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
