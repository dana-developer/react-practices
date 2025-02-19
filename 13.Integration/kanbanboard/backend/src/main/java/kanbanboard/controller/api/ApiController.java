package kanbanboard.controller.api;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.dto.JsonResult;
import kanbanboard.dto.UpdateTaskDoneRes;
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
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult<Task>> createTask(@RequestBody Task task) {
		taskRepository.insert(task);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(task));
	}
	
	@PutMapping("/task/{no}")
	public ResponseEntity<JsonResult<UpdateTaskDoneRes>> updateTaskDone(@PathVariable Long no, String done) {
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.updateDone(no, done) ? new UpdateTaskDoneRes(no, done): null));
	}
	
	@DeleteMapping("/task/{no}")
	public ResponseEntity<JsonResult<Long>> deleteTask(@PathVariable Long no) {
		log.info("Request[DELETE /kanbanboard/task] []", no);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.delete(no) ? no : -1));
	}
}
