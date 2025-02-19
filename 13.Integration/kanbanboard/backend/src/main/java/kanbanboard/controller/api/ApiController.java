package kanbanboard.controller.api;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/kanbanboard")
public class ApiController {

	private final CardRepository cardRepository;
	private final TaskRepository taskRepository;

	public ApiController(CardRepository cardRepository, TaskRepository taskRepository) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
	}


	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<Card>>> readCardList() {
		log.info("Request[GET /kanbanboard/card]");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<Task>>> readTaskList(Long cardNo) {
		log.info("Request[GET /kanbanboard/task]", cardNo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAllByCardNo(cardNo)));
	}
}
